const mysql = require("mysql2");

// database config
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "assignment",
  password: "***REMOVED***",
});

db.connect();

const getAllUsers = () => {
  return new Promise((resolve, reject) => {
    try {
      const sql = `SELECT * FROM user;`;
      db.query(sql, (err, result) => {
        if (err) return reject(err);
        return resolve(result);
      });
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  getAllUsers,
};
