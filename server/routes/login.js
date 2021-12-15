const express = require('express');
const router = express.Router();

const loginController = require('./../controllers/loginController.js');

const { verifyUser } = loginController;

router.post('/', verifyUser, (req, res) => {
  if (!res.locals.verified) {
    return res.status(200).json({ login: res.locals.verified });
  } else {
    return res
      .status(200)
      .json({ login: res.locals.verified, userInfo: res.locals.userInfo });
  }
});

module.exports = router;
