const express = require("express");
const user = express.Router();
const users = require("../controllers/users");

user.get("/", users.renderUsers);

user.route("/login").get(users.renderLogin).post(users.auth, users.login);

user.route("/signup").get(users.renderSignup).post(users.signup);

user.post("/logout", users.logout);

user.checkStatus = users.checkStatus;

module.exports = user;
