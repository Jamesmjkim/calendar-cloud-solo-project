const { Pool } = require('pg');
const dotenv = require('dotenv');

const PG_URI = `postgres://${process.env.PG_URI_Username}:${process.env.PG_URI_Password}@castor.db.elephantsql.com/${process.env.PG_URI_Username}`;

const pool = new Pool({
  connectionString: PG_URI,
});

// pool.query('SELECT _id, name from people ', (err, res) => {
//   // console.log(err,res);
//   // pool.end();
// });
module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
