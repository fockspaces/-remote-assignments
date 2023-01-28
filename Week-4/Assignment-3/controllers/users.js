const bcrypt = require("bcrypt");
const {
  getAllUsers,
  registerUser,
  checkUser,
  getOneUser,
} = require("../models/User");
const { catchAsync } = require("../utils/errorHandler");

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

// READ
const getUsers = catchAsync(async () => {
  const users = await getAllUsers();
  return users;
});

const getUser = catchAsync(async (id) => {
  const user = await getOneUser(id);
  return user[0];
});

// POST
const login = catchAsync(async (req, res) => {
  const { email } = req.body;
  const user = await checkUser(email);
  req.session.currentUser = user;

  req.flash("success", "You have successfully logged in.");
  return res.status(200).redirect("/article");
});

const logout = (req, res) => {
  req.session.destroy();
  res.redirect("/article");
};

const signup = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  const user = await checkUser(email);
  if (user.length) {
    req.flash("error", "User already exists");
    return res.status(409).redirect("/user/signup");
  }
  await registerUser({ email, password });
  return res.redirect("/user");
});

// middlewire
const auth = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  const users = await getAllUsers();
  const user = users.find((user) => user.email === email);
  if (!user) {
    req.flash("error", "user nont found");
    return res.status(404).redirect("/user/login");
  }

  // const isMatch = await bcrypt.compare(password, user.password);
  const isMatch = password === user.password;
  if (!isMatch) {
    req.flash("error", "Invalid username or password.");
    return res.status(401).redirect("/user/login");
  }
  next();
});

const checkStatus = (req, res, next) => {
  if (req.session.currentUser) {
    const { id, username } = req.session.currentUser[0];
    res.locals.currentUser = { id, username };
  }
  next();
};

const checkalert = (req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
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
  checkStatus,
  logout,
  checkalert,
};
