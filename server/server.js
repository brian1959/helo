require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const massive = require("massive");
const axios = require("axios");

const controller = require("./controller");

const { SECRET } = process.env;

const app = express();
massive(process.env.CONNECTION_STRING).then(dbInstance =>
  app.set("db", dbInstance)
);

app.use(bodyParser.json());
app.use(express.static(`${__dirname}/build`));
app.use(
  session({
    secret: SECRET,
    resave: false,
    saveUninitialized: true
  })
);

app.post("/api/user", controller.addUser);

app.get("/auth/logout", (req, res) => {
  req.session.destroy();
  res.redirect("http://localhost:3000/");
});

const PORT = process.env.SERVER_PORT;
app.listen(PORT, () => {
  console.log(`Server evesdropping on port ${PORT}.`);
});
