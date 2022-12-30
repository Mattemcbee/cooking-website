import { createSlice } from "@reduxjs/toolkit";
import { RECIPES } from "../../app/shared/RECIPES";

export const initialState = {
  recipeArray: RECIPES,
};

const addRecipeSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    addRecipe: (state, action) => {
      console.log("newRecipe action.payload:", action.payload);

      const newRecipe = {
        id: state.recipeArray.length + 1,
        ...action.payload,
      };
      state.recipeArray.push(newRecipe);
    },
  },
});

export const recipeReducer = addRecipeSlice.reducer;

export const { addRecipe } = addRecipeSlice.actions;

export const selecRecipeByRecipeId = (mealId) => (state) => {
  return state.recipes.recipeArray.filter(
    (recipe) => recipe.mealId === parseInt(mealId)
  );
};

export const selectAllRecipe = (state) => {
  return state.recipes.recipeArray;
};

export const selectFilteredRecipes = (filteredIngredients) => (state) => {
  if (filteredIngredients?.length > 0) {
    const filteredRecipes = state.recipes.recipeArray.filter((recipes) => {
      for (let i = 0; i < filteredIngredients.length; i++) {
        if (
          JSON.stringify(recipes.ingredients).indexOf(
            JSON.stringify(filteredIngredients[i])
          ) > -1
        )
          return true;
      }
      return false;
    });

    return filteredRecipes;
  }
};
