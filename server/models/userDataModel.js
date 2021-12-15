const mongoose = require('mongoose');

const MONGO_URI = 'mongodb://localhost/calendar-cloud';

mongoose.connect(MONGO_URI);
const Schema = mongoose.Schema;

const userDataSchema = new Schema({
  username: { type: String, required: true, unique: true },
  events: [
    {
      eventName: String,
      date: String,
      description: String,
    },
  ],
  files: [
    {
      date: String,
      fileName: String,
      fileType: String,
      fileSize: String,
      path: String,
    },
  ],
});

module.exports = mongoose.model('userData', userDataSchema);
