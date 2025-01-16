async function addRecipe() {
  const token = localStorage.getItem("token");
  try {
    if (token) {
      const fetchRecipe = await axios.get("/recipe", {
        // headers: {
        // Authorization: token,
        // },
      });
      if (fetchRecipe.status === 200) {
        window.location.href = "/recipe";
      }
    }
  } catch (err) {
    window.location.href = "/login";
    console.log(err);
  }
}

async function addRecipeDb() {
  const token = localStorage.getItem("token");
  const name = document.getElementById("recipeName").value;
  const description = document.getElementById("recipeDescription").value;
  const ingredients = document.getElementById("recipeIngredients").value;
  const method = document.getElementById("recipeMethod").value;
  const type = document.getElementById("recipeType").value;
  const time = document.getElementById("cookingTime").value;
  let obj = {
    recipeName: name,
    recipeDescription: description,
    recipeIngredients: ingredients,
    recipeMethod: method,
    recipeType: type,
    recipeTime: time,
  };
  const add = await axios.post("/addRecipeDb", obj, {
    headers: {
      Authorization: token,
    },
  });
  // console.log(add);
  clearAddForm();
}

function clearAddForm() {
  document.getElementById("recipeName").value = "";
  document.getElementById("recipeDescription").value = "";
  document.getElementById("recipeIngredients").value = "";
  document.getElementById("recipeMethod").value = "";
  document.getElementById("recipeType").value = "";
  document.getElementById("cookingTime").value = "";
}

async function getRecipe() {
  const recipe = await axios.get("");
}

window.addEventListener("DOMContentLoaded", async () => {
  const token = localStorage.getItem("token");
  const recipe = document.getElementById("addRecipe");
  recipe.addEventListener("click", () => {
    if (token) {
      addRecipe();
    } else {
      window.location.href = "/login";
    }
  });
  const login = document.getElementById("login");
  if (login) {
    login.addEventListener("click", () => {
      window.location.href = "/login";
    });
  }
  const logout = document.getElementById("logout");
  if (logout) {
    logout.addEventListener("click", () => {
      localStorage.removeItem("token");
      window.location.href = "/login";
    });
  }
});
