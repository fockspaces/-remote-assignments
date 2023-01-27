const express = require("express");
const user = express.Router();
const users = require("../controllers/users");

user.get("/", users.renderUsers);

user.route("/login").get(users.renderLogin).post(users.auth, users.login);

user.route("/signup").get(users.renderSignup).post(users.signup);

// user.get("/members", async (req, res) => {
//   const users = await getUsers();
//   res.render("users/index", { users });
// });

// user.get("/members/:id", async (req, res) => {
//   const { id } = req.params;
//   const user = await getUser(id);
//   res.render("users/memberPage", { user });
// });

module.exports = user;
