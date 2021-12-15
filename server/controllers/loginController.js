const sqlDB = require('./../models/usersModel');
const encryptPassword = require('./../encryptPassword');

const { comparePassword } = encryptPassword;

const loginController = {};

loginController.verifyUser = async (req, res, next) => {
  const { username, password } = req.body;
  const query =
    'SELECT u.name, u.username,u.email, u.password FROM users u WHERE u.username = $1';
  const params = [username];

  sqlDB.query(query, params).then(async (data) => {
    const verified = await comparePassword(password, data.rows[0].password);
    if (verified) {
      res.locals.verified = true;
      res.locals.userInfo = {
        name: data.rows[0].name,
        username: data.rows[0].username,
        email: data.rows[0].email,
      };
      return next();
    } else {
      res.locals.verified = false;
      return next();
    }
  });
};

module.exports = loginController;
