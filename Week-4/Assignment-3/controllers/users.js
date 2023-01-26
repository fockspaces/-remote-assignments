const { getAllUsers, registerUser, checkUser } = require("../models/User");

const getAccounts = async (req, res) => {
  const users = await getAllUsers();
  return users;
};

const auth = async (req, res, next) => {
  const { email, password } = req.body;
  const users = await getAllUsers();
  if (!users.find((user) => user.password === password && user.email === email))
    return res.redirect("/users");

  next();
};

const login = async (req, res) => {
  return res.status(200).send("rendering in member page");
};

const signup = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await checkUser(email);
    if (user.length) return res.status(409).send("User already exists");
    await registerUser({ email, password });
    return res.redirect("/users");
  } catch (e) {
    console.log("error:", e.message);
  }
};

module.exports = {
  auth,
  login,
  signup,
  getAccounts,
};
