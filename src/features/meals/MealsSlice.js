import { RECIPES } from '../../app/shared/RECIPES';
import { RECIPELIST } from '../../app/shared/RECIPELIST';
import { INGREDIENTS } from '../../app/shared/INGREDIENTLIST.js';

//this displays all the recipies at once
export const selectAllRecipies = () => {
    return RECIPES;
};
export const selectAllIngredients = () => {
    return INGREDIENTS;
};

// export const selectRecipeById = (id) => {
//     return RECIPIES.find((meal) => meal.id===parseInt(id));
// };

export const selectMealById = (id) => {
    return RECIPES.find((meal) => meal.id === parseInt(id));
};

// export const selectMealByIngredient = (ingredient) => {
//     return RECIPES.filter((meal) => meal.ingredients[0] === 'chicken');
// };
export const selectMealByIngredient = () => {
    return RECIPES.filter(meal => meal.ingredients.includes('chicken'));
};

export const filterIngredientsByTrue = INGREDIENTS.filter(ingredient => ingredient.pantry);

//searches for chicken
export const filterObj = () => RECIPES.filter(ingredient => ingredient.ingredients.includes(filterIngredientsByTrue));