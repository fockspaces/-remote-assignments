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

user
  .route("/login")
  .get((req, res) => {
    res.render("users/login");
  })
  .post(auth, login);

user
  .route("/signup")
  .get((req, res) => {
    res.render("users/signup");
  })
  .post(signup);

user.get("/members", async (req, res) => {
  const users = await getUsers();
  res.render("users/index", { users });
});

user.get("/members/:id", async (req, res) => {
  const { id } = req.params;
  const user = await getUser(id);
  res.render("users/memberPage", { user });
});

module.exports = user;
