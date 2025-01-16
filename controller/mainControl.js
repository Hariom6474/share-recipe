const path = require("path");
const User = require("../models/user");
const AddRecipe = require("../models/addRecipe");
const sequelize = require("../util/database");

exports.home = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../views", "home.html"), (err) => {
    if (err) {
      console.error("Error sending home.html file:", err);
      res.status(500).send("Error occurred");
    } else {
      // console.log("login.html file sent successfully");
    }
  });
};

exports.addRecipePage = (req, res, next) => {
  try {
    res
      .status(200)
      .sendFile(path.join(__dirname, "../views", "addRecipe.html"));
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
};

exports.addRecipeDb = async (req, res, next) => {
  try {
    const {
      recipeName,
      recipeDescription,
      recipeIngredients,
      recipeMethod,
      recipeType,
      recipeTime,
    } = req.body;
    const data = await AddRecipe.create({
      recipeName: recipeName,
      recipeDescription: recipeDescription,
      recipeIngredients: recipeIngredients,
      recipeMethod: recipeMethod,
      recipeType: recipeType,
      cookingTime: recipeTime,
    });
    if (data) {
      res.status(201).json({ data });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
};
