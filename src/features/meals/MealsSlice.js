import { RECIPES } from "../../app/shared/RECIPES";
import { INGREDIENTS } from "../../app/shared/INGREDIENTLIST.js";

//this displays all the recipies at once
export const selectAllRecipies = () => {
  return RECIPES;
};

export const selectAllIngredients = () => {
  return INGREDIENTS;
};

export const selectMealById = (id) => {
  return RECIPES.find((meal) => meal.id === parseInt(id));
};
