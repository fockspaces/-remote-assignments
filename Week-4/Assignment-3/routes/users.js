const express = require("express");
const user = express.Router();
const { auth } = require("../controllers/users");

user.get("/", (req, res) => {
  res.redirect("homepage.html");
});

user.get("/member", (req, res) => {
  res.redirect("member.html");
});

user.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  const sql = `INSERT INTO user (email, password) values ('${email}', '${password}');`;

  db.query(sql, (err, result) => {
    if (err) throw err;
    return res.status(200).send({ action: "goMemberPage" });
  });
});

user.post("/login", auth);

module.exports = user;
