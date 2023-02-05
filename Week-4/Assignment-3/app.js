const express = require("express");
const methodOverride = require("method-override");
const flash = require("connect-flash");
const session = require("express-session");
// const FileStore = require("session-file-store")(session);
require('dotenv').config();


const user = require("./routes/user");
const article = require("./routes/article");
const { notFound, errorHandler } = require("./utils/errorHandler");

const path = require("path");

const app = express();
const port = process.env.PORT;

app.use(express.json()); // to support JSON-encoded bodies
app.use(express.urlencoded({ extended: true })); // to support URL-encoded bodies
app.use(methodOverride("_method"));
// configure express-session
app.use(
  session({
    // store: new FileStore(),
    secret: "secretKey",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 7 * 24 * 60 * 60 * 1000 },
  })
);
app.use(flash());
// login status middleware
app.use(user.checkStatus);

// alert check middleware
app.use(user.checkalert);

// routers
app.get("/", (req, res) => {
  res.render("homepage");
});
app.use("/user", user);
app.use("/article", article);

// template engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
