const express = require("express");
const user = express.Router();

user.get("/", (req, res) => {
  res.redirect("homepage.html");
});

user.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  const sql = `INSERT INTO user (email, password) values ('${email}', '${password}');`;

  db.query(sql, (err, result) => {
    if (err) throw err;
    return res.status(200).send({ action: "goMemberPage" });
  });
});

user.post("/login", (req, res) => {
  const { email, password } = req.body;
  const sql = `SELECT * FROM user;`;
  db.query(sql, (err, result) => {
    if (err) throw err;

    if (
      result.find((user) => user.email === email && user.password === password)
    )
      return res.status(200).send({ action: "goMemberPage" });

    return res.status(404).send({ action: "showWrongMessage" });
  });
});

module.exports = user;
