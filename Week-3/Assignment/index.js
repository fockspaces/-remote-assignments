const exrpess = require("express");
const app = exrpess();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello, My Server!</h1>");
});

app.listen(port, () => {
    console.log(`listening on ${port}`);
})