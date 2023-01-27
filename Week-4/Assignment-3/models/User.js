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
    const sql = `SELECT * FROM user;`;
    db.query(sql, (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};

const getOneUser = (id) => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM user WHERE id = ${id};`;
    db.query(sql, (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};

const registerUser = (user) => {
  return new Promise((resolve, reject) => {
    const sql = `INSERT INTO user (email, password) values (?, ?);`;
    db.query(sql, [user.email, user.password], (err, result) => {
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
      resovle(result);
    });
  });
};

module.exports = {
  getAllUsers,
  registerUser,
  checkUser,
  getOneUser,
};
