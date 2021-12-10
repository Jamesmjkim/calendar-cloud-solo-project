const sqlDB = require('./../models/usersModel');
const encryptPassword = require('./../encryptPassword');

const { hashPassword, comparePassword } = encryptPassword;

const loginController = {};

loginController.verifyUser = (req, res, next) => {
  //   console.log(req.body.username);
  const { username, password } = req.body;
  const query = 'SELECT u.username, u.email, u.password FROM users u';

  sqlDB.query(query).then((data) => {
    console.log(data);
  });

  return next();
};

module.exports = loginController;
