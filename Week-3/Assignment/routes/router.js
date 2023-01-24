const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  return res.render("homepage");
});

router.get("/data", (req, res) => {
  if (!req.query.number) {
    // return res.render("error", { errorCODE: 1 });
    return res.send("<h3>Lack of Parameter</h3>");
  }
  if (Object.keys(req.query).length) {
    const num = +req.query.number;

    // if integer => sum of 1 + 2 + ... + n else error message
    const renderedText = `<h3>The sum of the number from (1 to ${num}) is : ${
      (num * (num + 1)) / 2
    }</h3>`;

    if (Number.isInteger(num)) {
      return res.send(renderedText);
    } else {
      // return res.render("error", { errorCODE: 2 });
      return res.send("<h3>Wrong Parameter (not an integer)</h3>");
    }
  } else {
    // return res.render("error", { errorCODE: 1 });
    return res.send("<h3>Lack of Parameter</h3>");
  }
});

// custom usernames
// router.get("/:myName", (req, res) => {
//   const { myName } = req.params;
//   if (Object.values(req.cookies).includes(myName)) {
//     // res.cookie("username", myName);
//     res.render("homepage", { name: myName });
//   } else {
//     return res.render("gosignup");
//   }
// });

// only myName
router.get("/myName", (req, res) => {
  const { myName } = req.cookies;
  if (myName) {
    return res.render("homepage", { name: myName });
  } else {
    return res.render("gosignup");
  }
});

router.post("/trackName", (req, res) => {
  const { myName } = req.body;

  if (myName == "") {
    return res.redirect("signup.html");
  } else {
    // res.cookie(`${myName}`, myName);
    // res.cookie("username", myName);
    res.cookie("myName", myName);
    // return res.redirect(`/${myName}`);
    return res.redirect(`/myName`);
  }
});

router.post("/logout", (req, res) => {
  res.clearCookie("myName");
  return res.redirect("/");
});

router.get("/signup", (req, res) => {
  return res.redirect("signup.html");
});

router.get("/data/*", function (req, res) {
  return res.redirect("/data");
});

module.exports = router;
