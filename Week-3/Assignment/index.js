const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
const port = 3000;

const router = require("./routes/router");

app.use(express.static(__dirname + "/public"));
app.use(cookieParser());
app.use(express.json()); // to support JSON-encoded bodies
app.use(express.urlencoded({ extended: true })); // to support URL-encoded bodies

app.use("/", router);

app.set("view engine", "pug");

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
