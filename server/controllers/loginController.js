const sqlDB = require('./../models/usersModel');
const encryptPassword = require('./../encryptPassword');

const { comparePassword } = encryptPassword;

const loginController = {};

loginController.verifyUser = async (req, res, next) => {
  //   console.log(req.body.username);
  const { username, password } = req.body;
  const query =
    'SELECT u.name, u.username,u.email, u.password FROM users u WHERE u.username = $1';
  const params = [username];

  sqlDB.query(query, params).then(async (data) => {
    const verified = await comparePassword(password, data.rows[0].password);
    if (verified) {
      return next();
    } else {
      res.locals.verified = false;
      return next();
    }
  });
};

module.exports = loginController;
