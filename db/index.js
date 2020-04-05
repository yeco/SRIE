const massive = require("massive");

let db;

exports = module.exports = function() {
  if (db) {
    return db;
  }

  return massive({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS
  }).then(instance => {
    db = instance;

    return Promise.resolve(db);
  });
};
