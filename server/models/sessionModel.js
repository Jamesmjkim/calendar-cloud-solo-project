const mongoose = require('mongoose');

const MONGO_URI = 'mongodb://localhost/calendar-cloud';

mongoose.connect(MONGO_URI);

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
      route: String,
    },
  ],
});

module.exports = mongoose.model('userData', sessionSchema);
