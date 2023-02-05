const mysql = require("mysql2");

// database config
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
});

db.connect();

const getAllUsers = () => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM user;`;
    db.query(sql, (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};

const getOneUser = (id) => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM user WHERE id = ${id} LIMIT 1;`;
    db.query(sql, (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};

const registerUser = (user) => {
  return new Promise((resolve, reject) => {
    const sql = `INSERT INTO user (email, password, username) values (?, ?, ?);`;
    db.query(sql, [user.email, user.password, user.username], (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};

const checkUser = (email) => {
  return new Promise((resovle, reject) => {
    const sql = `SELECT * FROM user WHERE email = '${email}';`;
    db.query(sql, (err, result) => {
      if (err) reject(err);
      resovle(result[0]);
    });
  });
};

module.exports = {
  getAllUsers,
  registerUser,
  checkUser,
  getOneUser,
};
