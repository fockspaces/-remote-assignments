const { getAllUsers } = require("../models/User");

const auth = async (req, res, next) => {
  const { email, password } = req.body;
  const users = await getAllUsers();
  if (users.find((user) => user.password === password && user.email === email))
    res.status(200).send("rendering in member page");
  else {
    res.redirect("/users");
  }
};

module.exports = {
  auth,
};
