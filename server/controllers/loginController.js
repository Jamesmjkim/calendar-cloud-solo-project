const sqlDB = require('./../models/usersModel');
const encryptPassword = require('./../encryptPassword');

const { hashPassword, comparePassword } = encryptPassword;

const loginController = {};

loginController.verifyUser = async (req, res, next) => {
  //   console.log(req.body.username);
  const { username } = req.body;
  const password = await hashPassword(req.body.password);
  const query =
    'SELECT u.name, u.username,u.email, u.password FROM users u WHERE u.username = $1';
  const params = [username];
  console.log(password);

  sqlDB.query(query, params).then((data) => {
    console.log(data.rows);
  });

  return next();
};

loginController.createUser = async (req, res, next) => {
  const { name, username, email } = req.body;
  const password = await hashPassword(req.body.password);

  const query =
    'INSERT INTO users (name, username, email, password)\
    VALUES($1, $2, $3, $4)\
    RETURNING *;';

  const params = [name, username, email, password];

  sqlDB
    .query(query, params)
    .then((userData) => {
      console.log(userData.rows);
      return next();
    })
    .catch((err) => {
      return next({
        log: 'Error with loginController.createUser',
        message: {
          err: `Error: ${err}`,
        },
      });
    });
};

module.exports = loginController;
