const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const fileUpload = require('express-fileupload');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 80;

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

const loginRouter = require('./routes/login.js');
const registerRouter = require('./routes/register.js');
const uploadRouter = require('./routes/upload.js');
const eventRouter = require('./routes/event.js');
const calendarRouter = require('./routes/calendar');

app.use(
  '/static',
  express.static(path.resolve(__dirname, './../client/static'))
);

app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/upload', uploadRouter);
app.use('/event', eventRouter);
app.use('/calendar', calendarRouter);

if (process.env.NODE_ENV === 'production') {
  app.use('/build', express.static(path.resolve(__dirname, './../build')));
  app.get('/', (req, res) => {
    return res
      .status(200)
      .sendFile(path.resolve(__dirname, './../client/index.html'));
  });
}

app.use((req, res) => {
  res.status(404).send('NOT FOUND');
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred ' },
  };
  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj);
  res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}...`);
});
