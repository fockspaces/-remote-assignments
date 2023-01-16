const express = require("express");
const XMLHttpRequest = require("xhr2");

const app = express();
const port = 3000;
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("<h1>Hello, My Server!</h1>");
});

app.get("/data", (req, res) => {
  if (Object.keys(req.query).length) {
    const num = parseInt(req.query.number);

    // if integer => sum of 1 + 2 + ... + n else error message
    const renderedText = Number.isInteger(num)
      ? `<h3>The sum of the number from (1 to ${num}) is : ${
          (num * (num + 1)) / 2
        }</h3>`
      : "<h3>Wrong Parameter (not an integer)</h3>";

    res.send(renderedText);
  } else {
    res.send("<h3>Lack of Parameter</h3>");
  }
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
