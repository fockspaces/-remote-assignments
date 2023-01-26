const express = require("express");
const user = express.Router();
const { auth, login, signup, getAccounts } = require("../controllers/users");

user.get("/", (req, res) => {
  res.render("accounts/homepage");
});

user.get("/accounts", async (req, res) => {
  const accounts = await getAccounts();
  console.log(accounts);
  res.render("accounts/index", { accounts });
});

user.post("/signup", signup);

user.post("/login", auth, login);

module.exports = user;
