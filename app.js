const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
require("dotenv").config();
const fs = require("fs");

const port = process.env.PORT || 3000;

const sequelize = require("./util/database");
const userRoutes = require("./routes/userRoute");
const mainRoutes = require("./routes/mainRoute");
const errorRoutes = require("./routes/error");
const forgotRoute = require("./routes/forgot");

const app = express();

const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "access.log"),
  { flags: "a" }
);

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static("views"));

app.use("/", userRoutes);
app.use("/", forgotRoute);
app.use("/", mainRoutes);
app.use(errorRoutes);

sequelize
  // .sync({ force: true })
  .sync()
  .then(() => {
    app.listen(port, () => {
      console.log("app is listening to port ", port);
    });
  })
  .catch((err) => {
    console.log(err);
  });
