const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
const port = 3000;

app.use(express.static(__dirname + "/public"));
app.use(cookieParser());
app.use(express.json()); // to support JSON-encoded bodies
app.use(express.urlencoded({ extended: true })); // to support URL-encoded bodies

app.set("view engine", "pug");

app.get("/", (req, res) => {
  return res.render("homepage");
});

app.get("/data", (req, res) => {
  if (!req.query.number) return res.render("error", { errorCODE: 1 });
  if (Object.keys(req.query).length) {
    const num = +req.query.number;

    // if integer => sum of 1 + 2 + ... + n else error message
    const renderedText = `<h3>The sum of the number from (1 to ${num}) is : ${
      (num * (num + 1)) / 2
    }</h3>`;

    if (Number.isInteger(num)) {
      res.send(renderedText);
    } else {
      return res.render("error", { errorCODE: 2 });
    }
  } else {
    return res.render("error", { errorCODE: 1 });
  }
});

app.get("/:myName", (req, res) => {
  const { myName } = req.params;
  if (Object.values(req.cookies).includes(myName)) {
    res.cookie("username", myName);
    res.render("homepage", { name: myName });
  } else {
    return res.redirect("signup.html");
  }
});

app.post("/trackName", (req, res) => {
  const { myName } = req.body;

  if (myName == "") {
    return res.redirect("signup.html");
  } else {
    res.cookie(`${myName}`, myName);
    res.cookie("username", myName);
    return res.redirect(`/${myName}`);
  }
});

app.post("/logout", (req, res) => {
  const { username } = req.cookies;
  res.clearCookie("username");
  res.clearCookie(username);
  return res.redirect("/");
});

app.get("/signup", (req, res) => {
  return res.redirect("signup.html");
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
