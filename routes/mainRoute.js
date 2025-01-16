const express = require("express");
const userAuthentication = require("../middleware/auth");
const mainControl = require("../controller/mainControl");
const router = express.Router();

router.get("/", mainControl.home);
router.get(
  "/recipe",
  userAuthentication.authenticate,
  mainControl.addRecipePage
);
router.post(
  "/addRecipeDb",
  userAuthentication.authenticate,
  mainControl.addRecipeDb
);

module.exports = router;
