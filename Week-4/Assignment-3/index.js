const express = require("express");
const user = require("./routes/users");

const app = express();
const port = 3000;

app.use(express.json()); // to support JSON-encoded bodies
app.use(express.urlencoded({ extended: true })); // to support URL-encoded bodies

// routers
app.use(express.static(__dirname + "/views"));
app.use("/users", user);

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
