const express = require('express');
const router = express.Router();

const loginController = require('./../controllers/loginController.js');

const { verifyUser, createUser } = loginController;

router.post('/', verifyUser, (req, res) => {
  return res.sendStatus(200);
});

router.post('/signup', createUser, (req, res) => {
  return res.sendStatus(200);
});

module.exports = router;
