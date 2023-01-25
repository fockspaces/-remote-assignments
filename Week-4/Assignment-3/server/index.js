const express = require("express");
const mysql = require("mysql2");
const user = require("./routes/user");

const app = express();
const port = 3000;

app.use(express.json()); // to support JSON-encoded bodies
app.use(express.urlencoded({ extended: true })); // to support URL-encoded bodies

// database config
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "assignment",
  password: "***REMOVED***",
});

db.connect();

// routers
app.use(express.static(__dirname + "/public"));
app.use("/user", user);

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
