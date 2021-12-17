const userData = require('./../models/userDataModel');

const calendarController = {};

calendarController.getData = (req, res, next) => {
  const { username } = req.params;
  userData
    .findOne({ username })
    .then((data) => {
      const userData = {
        events: data.events,
        files: data.files,
      };
      res.locals.userData = userData;
      //   console.log(userData);

      return next();
    })
    .catch((err) => {
      return next({
        log: `Error with calendarController.getData Error: ${err}`,
        message: {
          err: 'calendarController.getData ERROR: Check server logs for details',
        },
      });
    });
};

module.exports = calendarController;
