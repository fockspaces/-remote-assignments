const {
  getAllUsers,
  registerUser,
  checkUser,
  getOneUser,
} = require("../models/User");

// display
const renderUsers = (req, res) => {
  res.render("homepage");
};

const renderLogin = (req, res) => {
  res.render("users/login");
};

const renderSignup = (req, res) => {
  res.render("users/signup");
};

const getUsers = async () => {
  const users = await getAllUsers();
  return users;
};

const getUser = async (id) => {
  const user = await getOneUser(id);
  return user[0];
};

const auth = async (req, res, next) => {
  const { email, password } = req.body;
  const users = await getAllUsers();
  if (!users.find((user) => user.password === password && user.email === email))
    return res.redirect("/user");

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
    return res.redirect("/user");
  } catch (e) {
    console.log("error:", e.message);
  }
};

module.exports = {
  auth,
  login,
  signup,
  getUsers,
  getUser,
  renderUsers,
  renderLogin,
  renderSignup,
};
