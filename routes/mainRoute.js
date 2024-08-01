const express = require("express");
const userAuthentication = require("../middleware/auth");
const mainControl = require("../controller/mainControl");
const router = express.Router();

router.get("/", userAuthentication.authenticate, mainControl.home);

module.exports = router;
