const express = require("express");
const user = require("./routes/user");
const article = require("./routes/article");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.json()); // to support JSON-encoded bodies
app.use(express.urlencoded({ extended: true })); // to support URL-encoded bodies

// routers
app.get("/", (req, res) => {
  res.render("homepage");
});
app.use("/user", user);
app.use("/article", article);

// template engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
