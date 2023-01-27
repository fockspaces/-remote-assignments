const mysql = require("mysql2");

// database config
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "assignment",
  password: "***REMOVED***",
});

db.connect();

const getAllArticles = () => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM article;`;
    db.query(sql, (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};

const getOneArticle = (id) => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM article WHERE id = ${id};`;
    db.query(sql, (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};

module.exports = {
  getAllArticles,
  getOneArticle,
};
