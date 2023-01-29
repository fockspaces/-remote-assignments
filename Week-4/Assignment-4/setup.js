const mysql = require("mysql2");
const data = require("./articles.json");

// database config
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "assignment",
  password: "***REMOVED***",
});

// connect to the database
db.connect();

// execute the prepared statement for each item in the data array
data.forEach((item) => {
  const { title, content, authorID } = item;
  const sql = `INSERT INTO article (title, content, authorID) values (?, ?, ?);`;
  db.query(sql, [title, content, authorID], (err, result) => {
    if (err) console.err(err);
    console.log(result);
  });
});

db.end();
