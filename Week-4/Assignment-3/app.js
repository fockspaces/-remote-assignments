const express = require("express");
const methodOverride = require("method-override");
const flash = require("connect-flash");
const session = require("express-session");

const user = require("./routes/user");
const article = require("./routes/article");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.json()); // to support JSON-encoded bodies
app.use(express.urlencoded({ extended: true })); // to support URL-encoded bodies
app.use(methodOverride("_method"));
// configure express-session
app.use(
  session({
    secret: "secretKey",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(flash());
// login status middleware
app.use(user.checkStatus);

// alert check middleware
app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});

// routers
app.get("/", (req, res) => {
  res.render("homepage");
});
app.use("/user", user);
app.use("/article", article);

// template engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use((req, res) => {
  res.status(404).send("Sorry, that page doesn't exist.");
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
