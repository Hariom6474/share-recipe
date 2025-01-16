const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const addRecipe = sequelize.define("addRecipe", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  recipeName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  recipeDescription: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  recipeIngredients: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  recipeMethod: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  recipeType: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cookingTime: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  recipeImageUrl: {
    type: Sequelize.STRING,
  },
});

module.exports = addRecipe;
