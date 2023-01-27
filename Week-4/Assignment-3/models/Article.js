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

const addArticle = (article) => {
  return new Promise((resolve, reject) => {
    const sql = `INSERT INTO article (title, content) values (?, ?);`;
    db.query(sql, [article.title, article.content], (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};

const UpdatePost = (article) => {
  return new Promise((resolve, reject) => {
    const { id, title, content } = article;
    const sql = "UPDATE article SET title=?, content=? WHERE id=?";
    db.query(sql, [title, content, id], (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};

const DeletePost = (id) => {
  return new Promise((resolve, reject) => {
    const sql = "DELETE FROM article WHERE id=?";
    db.query(sql, [id], (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};

module.exports = {
  getAllArticles,
  getOneArticle,
  addArticle,
  UpdatePost,
  DeletePost,
};
