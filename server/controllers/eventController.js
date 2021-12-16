const monDB = require('./../models/userDataModel');

const eventController = {};

eventController.getEvent = (req, res, next) => {
  const { username } = req.body;
  monDB
    .findOne(username)
    .then((userData) => {
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
  console.log('here');

  monDB
    .updateOne(
      { username },
      {
        $push: {
          events: {
            eventName,
            date,
            description,
          },
        },
      }
    )
    .then((update) => {
      console.log(update);
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

module.exports = eventController;
