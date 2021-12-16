const express = require('express');
const eventController = require('./../controllers/eventController');

const router = express.Router();

const { createEvent, getEvent, deleteEvent } = eventController;

router.get('/:username', getEvent, (req, res) => {
  return res.status(200).json(res.locals.events);
});

router.post('/', createEvent, (req, res) => {
  return res.sendStatus(200);
});

router.delete('/:username/:eventName', deleteEvent, (req, res) => {
  return res.sendStatus(200);
});

module.exports = router;
