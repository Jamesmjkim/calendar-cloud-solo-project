const sqlDB = require('./../models/usersModel');
const monDB = require('./../models/userDataModel');
const encrpytPassword = require('./../encryptPassword');

const { hashPassword } = encrpytPassword;

const registerController = {};

registerController.createUser = async (req, res, next) => {
  const { name, username, email } = req.body;
  try {
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
        monDB
          .create({ username })
          .then((res) => console.log(res))
          .catch((err) => {
            return next({
              log: `Error with registerController.createUser Error: ${err}`,
              message: {
                err: 'registerController.createUser ERROR: Check server logs for details',
              },
            });
          });
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
  } catch (err) {
    if (err)
      return next({
        log: `Error with registerController.createUser Error: ${err}`,
        message: {
          err: 'registerController.createUser ERROR: Check server logs for details',
        },
      });
  }
};

module.exports = registerController;
