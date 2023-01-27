const express = require("express");
const user = express.Router();
const {
  auth,
  login,
  signup,
  getUsers,
  getUser,
} = require("../controllers/users");

user.get("/", (req, res) => {
  res.render("homepage");
});

user.get("/login", (req, res) => {
  res.render("users/login");
});

user.get("/signup", (req, res) => {
  res.render("users/signup");
});

user.get("/members", async (req, res) => {
  const users = await getUsers();
  res.render("users/index", { users });
});

user.get("/members/:id", async (req, res) => {
  const { id } = req.params;
  const user = await getUser(id);
  res.render("users/memberPage", { user });
});

user.post("/signup", signup);

user.post("/login", auth, login);

module.exports = user;
