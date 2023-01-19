// const express = require("express");
// const router = express.Router();

// router.get("/data", (req, res) => {
//   if (!req.query.number) {
//     throw new Error("Lack of Parameter");
//   }
//   if (Object.keys(req.query).length) {
//     const num = +req.query.number;

//     // if integer => sum of 1 + 2 + ... + n else error message
//     const renderedText = `<h3>The sum of the number from (1 to ${num}) is : ${
//       (num * (num + 1)) / 2
//     }</h3>`;

//     if (Number.isInteger(num)) {
//       res.send(renderedText);
//     } else {
//       throw new Error("Wrong Parameter");
//     }
//   } else {
//     throw new Error("Lack of Parameter");
//   }
// });

// router.get("/*", function (req, res) {
//   throw new Error("404 not found");
// });

// router.use((err, req, res, next) => {
//   console.log(err.message);
//   if (err.message === "Lack of Parameter") {
//     return res.render("error", { errorCODE: 1 });
//   }
//   if (err.message === "Wrong Parameter") {
//     return res.render("error", { errorCODE: 2 });
//   }
//   if (err.message === "404 Not found") {
//     return res.render("error", { errorCODE: 3 });
//   }
// });

// module.exports = router;
