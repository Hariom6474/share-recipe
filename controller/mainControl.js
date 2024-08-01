const path = require("path");
const User = require("../models/user");
const sequelize = require("../util/database");

exports.home = async (req, res, next) => {
  await res.sendFile(path.join(__dirname, "../views", "home.html"), (err) => {
    if (err) {
      console.error("Error sending home.html file:", err);
      res.status(500).send("Error occurred");
    } else {
      // console.log("login.html file sent successfully");
    }
  });
};
