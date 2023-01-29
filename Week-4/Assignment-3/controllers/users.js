const bcrypt = require("bcrypt");
const fs = require("fs");

const {
  getAllUsers,
  registerUser,
  checkUser,
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

// POST
const login = catchAsync(async (req, res) => {
  const { email } = req.body.user;
  const user = await checkUser(email);
  req.session.currentUser = user;

  writeFile(user);
  req.flash("success", "Welcome! Let's keep writing down the new idea!");
  return res.status(200).redirect(`/article`);
});

const logout = (req, res) => {
  req.session.destroy();
  res.redirect("/");
};

const signup = catchAsync(async (req, res, next) => {
  const { user } = req.body;
  const userExist = await checkUser(user.email);
  if (userExist.length) {
    req.flash("error", "User already exists");
    return res.status(409).redirect("/user/signup");
  }
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  await registerUser(user);
  next();
});

// middlewire
const auth = catchAsync(async (req, res, next) => {
  const { email, password } = req.body.user;
  const users = await getAllUsers();
  const user = users.find((user) => user.email === email);
  if (!user) {
    req.flash("error", "user nont found");
    return res.status(404).redirect("/user/login");
  }

  // const isMatch = await bcrypt.compare(password, user.password);
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    req.flash("error", "Invalid username or password.");
    return res.status(401).redirect("/user/login");
  }
  req.body.id = user.id;
  next();
});

const checkStatus = (req, res, next) => {
  if (req.session.currentUser) {
    const currentUser = req.session.currentUser;
    res.locals.currentUser = currentUser;
  }
  next();
};

const writeFile = (user) => {
  fs.appendFile(
    "./loginStatus.txt",
    JSON.stringify(user) + ",",
    "utf-8",
    (error) => {
      if (error) {
        console.error(error);
      }
      console.log("The data was appended to the file.");
    }
  );
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
  renderUsers,
  renderLogin,
  renderSignup,
  checkStatus,
  logout,
  checkalert,
};
