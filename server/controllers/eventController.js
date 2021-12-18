const monDB = require('./../models/userDataModel');

const eventController = {};

eventController.getEvent = (req, res, next) => {
  const { username } = req.params;
  monDB
    .findOne({ username })
    .then((userData) => {
      // console.log(userData.events);
      res.locals.events = userData.events;
      return next();
    })
    .catch((err) => {
      return next({
        log: `Error with eventController.getEvent Error: ${err}`,
        message: {
          err: 'eventController.getEvent ERROR: Check server logs for details',
        },
      });
    });
};

eventController.createEvent = (req, res, next) => {
  const { date, eventName, description, username } = req.body;
  // console.log('here');

  monDB
    .findOneAndUpdate(
      { username },
      {
        $push: {
          events: {
            eventName,
            date,
            description,
          },
        },
      },
      { returnDocument: 'after' }
    )
    .then((update) => {
      res.locals.events = update.events;
      // console.log(update);
      return next();
    })
    .catch((err) => {
      return next({
        log: `Error with eventController.createEvent Error: ${err}`,
        message: {
          err: 'eventController.createEvent ERROR: Check server logs for details',
        },
      });
    });
};

eventController.deleteEvent = (req, res, next) => {
  const { username, eventName } = req.params;
  monDB
    .findOneAndUpdate(
      { username },
      {
        $pull: {
          events: {
            eventName,
          },
        },
      },
      { returnDocument: 'after' }
    )
    .then((data) => {
      res.locals.events = data.events;
      // console.log(data);
      return next();
    })
    .catch((err) => {
      return next({
        log: `Error with uploadController.deleteFile Error: ${err}`,
        message: {
          err: 'uploadController.deleteFile ERROR: Check server logs for details',
        },
      });
    });
};

module.exports = eventController;
