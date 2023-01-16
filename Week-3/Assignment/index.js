const exrpess = require("express");
const app = exrpess();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello, My Server!</h1>");
});

app.get("/data", (req, res) => {
  res.send("<h1>Lack of Parameter</h1>");
});

app.get("/data/:number", (req, res) => {
  const num = parseInt(req.params.number);

  // if integer => sum of 1 + 2 + ... + n else error message
  const renderedText = Number.isInteger(num)
    ? `<h2>The sum of the number from (1 to ${num}) is : ${(num * (num + 1)) / 2}</h2>`
    : "<h2>Wrong Parameter (not an integer)</h2>";

  res.send(renderedText);
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
