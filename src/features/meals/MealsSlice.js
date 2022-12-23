import { RECIPES } from '../../app/shared/RECIPES';
import { INGREDIENTS } from '../../app/shared/INGREDIENTLIST.js';
import stringArrayPush from '../recipes/RecipeFilterFromCheck';
//this displays all the recipies at once
export const selectAllRecipies = () => {
    return RECIPES;
};
export const selectAllIngredients = () => {
    return INGREDIENTS;
};
//this is the whole thing
export const filterIngredientsByTrue = () => { return RECIPES.filter(ingredient => JSON.stringify(ingredient.ingredients).includes(stringArrayPush())); console.log(filterIngredientsByTrue,'bytrue') }

//filter
//this is the whole thing
export const filterExport= () => {
    if (stringArrayPush().length >3 ) {
     return RECIPES.map(ingredient => JSON.stringify(ingredient.ingredients).includes(stringArrayPush())); 
    } } ; 
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