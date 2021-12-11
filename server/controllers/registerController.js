const sqlDB = require('./../models/usersModel');
const encrpytPassword = require('./../encryptPassword');

const { hashPassword } = encrpytPassword;

const registerController = {};

registerController.createUser = async (req, res, next) => {
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

module.exports = registerController;