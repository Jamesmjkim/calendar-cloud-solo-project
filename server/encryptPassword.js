const bcrypt = require('bcryptjs');
const SALT_WORK_FACTOR = 10;

const hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  } catch (err) {
    console.log(err);
  }
};

const comparePassword = async (attPassword, hashedPassword) => {
  try {
    const isMatch = await bcrypt.compare(attPassword, hashedPassword);
    return isMatch;
  } catch (err) {
    console.log(err);
  }
};
module.exports = { hashPassword, comparePassword };
