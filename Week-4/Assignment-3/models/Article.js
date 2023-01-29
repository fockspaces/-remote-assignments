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
    const sql = `SELECT article.*, user.username AS authorName FROM article 
    JOIN user ON article.authorID = user.id
    ORDER BY article.id DESC;`;
    db.query(sql, (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};

const getOneArticle = (id) => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT article.*, user.username AS authorName FROM article 
    JOIN user ON article.authorID = user.id WHERE article.id = ${id} LIMIT 1;`;
    db.query(sql, (err, result) => {
      if (err) reject(err);
      resolve(result[0]);
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
