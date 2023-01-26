const express = require("express");
const user = express.Router();
const { auth, login, signup } = require("../controllers/users");


user.get("/", (req, res) => {
  res.render("homepage");
});

user.post("/signup", signup);

user.post("/login", auth, login);

module.exports = user;
