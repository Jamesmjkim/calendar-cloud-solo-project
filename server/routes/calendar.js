const express = require('express');

const router = express.Router();

const calendarController = require('./../controllers/calendarController');

const { getData } = calendarController;

router.get('/:username', getData, (req, res) => {
  return res.status(200).json(res.locals.userData);
});

module.exports = router;
