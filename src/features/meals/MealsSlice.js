import { RECIPIES } from '../../app/shared/RECIPIES';

//this displays all the recipies at once
export const selectAllRecipies = () => {
    return RECIPIES;
};

export const selectRecipeById = (id) => {
    return RECIPIES.find((recipe) => recipe.id===parseInt(id));
};

