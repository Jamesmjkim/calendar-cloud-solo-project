const express = require('express');
const eventController = require('./../controllers/eventController');

const router = express.Router();

const { createEvent, getEvent } = eventController;

router.get('/', getEvent, (req, res) => {
  return res.status(200).json(res.locals.events);
});

router.post('/', createEvent, (req, res) => {
  return res.sendStatus(200);
});

module.exports = router;
