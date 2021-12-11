const express = require('express');
const router = express.Router();

const loginController = require('./../controllers/loginController.js');

const { verifyUser, createUser } = loginController;

router.post('/', verifyUser, (req, res) => {
  if (res.locals.verified === false) {
    return res.redirect('/register');
  } else {
    return res.status(200).json({ login: 'verified pass' });
  }
});

module.exports = router;
