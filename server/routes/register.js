const express = require('express');
const router = express.Router();

const registerController = require('../controllers/registerController.js');

const { createUser } = registerController;

router.post('/', createUser, (req, res) => {
  return res.status(200).json({ createdAccount: 'success' });
});

module.exports = router;
