const express = require("express");
const mysql = require("mysql2");

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   database: "assignment",
// });

// db.connect();

app.get("/", (req, res) => {
  res.redirect('homepage.html')
});

app.post("/signup", (req, res) => {
  console.log("signup");
});

app.post("/login", async (req, res) => {
  console.log(req.body);
});

app.listen("3000", () => {
  console.log("server started");
});
