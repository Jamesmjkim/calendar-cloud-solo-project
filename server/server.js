const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(
  '/static',
  express.static(path.resolve(__dirname, './../client/static'))
);

if (process.env.NODE_ENV === 'production') {
  app.use('/build', express.static(path.resolve(__dirname, './../build')));
  app.get('/', (req, res) => {
    return res
      .status(200)
      .sendFile(path.resolve(__dirname, './../client/index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}...`);
});
