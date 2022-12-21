import { RECIPELIST } from "../../app/shared/RECIPELIST";

export const selectRecipeByMealID = (mealId) => {
    return RECIPELIST.filter((recipe)=>recipe.mealId===parseInt(mealId));
} ;

