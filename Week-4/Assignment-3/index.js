const express = require("express");
const mysql = require("mysql2");
const user = require("./routes/user");

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));

// database config
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "assignment",
  password: "***REMOVED***",
});

db.connect();

// routers
app.use("/user", user);

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
