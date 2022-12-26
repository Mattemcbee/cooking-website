import { RECIPES } from "../../app/shared/RECIPES";
import { INGREDIENTS } from "../../app/shared/INGREDIENTLIST.js";
import stringArrayPush from "../recipes/RecipeFilterFromCheck";
//this displays all the recipies at once
export const selectAllRecipies = () => {
  return RECIPES;
};

//Depending on how you want the filter to work, may need to rewrite the logic a bit.
export const selectFilteredRecipes = (filteredIngredients) => {
  if (filteredIngredients?.length > 0) {
    const filteredRecipes = RECIPES.filter((recipes) => {
      for (let i = 0; i < filteredIngredients.length; i++) {
        if (recipes.ingredients.indexOf(filteredIngredients[i]) > -1)
          return true;
      }
      return false;
    });

    return filteredRecipes;
  }

  return RECIPES;
};

export const selectAllIngredients = () => {
  return INGREDIENTS;
};
//this is the whole thing
export const filterIngredientsByTrue = () => {
  return RECIPES.filter((ingredient) =>
    JSON.stringify(ingredient.ingredients).includes(stringArrayPush())
  );
  console.log(filterIngredientsByTrue, "bytrue");
};

//filter
//this is the whole thing
export const filterExport = () => {
  if (stringArrayPush().length > 3) {
    return RECIPES.map((ingredient) =>
      JSON.stringify(ingredient.ingredients).includes(stringArrayPush())
    );
  }
};
// console.log(filterIngredientsByTrue,'bytrue')

export const selectMealById = (id) => {
  return RECIPES.find((meal) => meal.id === parseInt(id));
};

// //
// export const selectMealByIngredient = () => {
//     return RECIPES.filter(meal => meal.ingredients.includes('chicken'));
// };

// //searches for chicken
// export const filterObj = () => RECIPES.filter(ingredient => ingredient.ingredients.includes(filterIngredientsByTrue));
