import { createSlice } from '@reduxjs/toolkit';
import { RECIPES } from '../../app/shared/RECIPES';

export const initialState = {
    recipeArray: RECIPES
};

// export const selectNewRecipe = (state) => {
//     return state.recipes.arrayToString;
    
// }

const addRecipeSlice=createSlice({
    name: 'recipes',
    initialState,
    reducers: {
        addRecipe: (state, action) => {
            console.log('newRecipe action.payload:', action.payload);



            const newRecipe={
                id: state.recipeArray.length + 1,
                ...action.payload,
                // ...state, arrayToString: action.payload

            };
            state.recipeArray.push(newRecipe)
            
            
            // return ( )
        }
        
    }
    
});

export const recipeReducer = addRecipeSlice.reducer;

export const { addRecipe } = addRecipeSlice.actions;

//  export const arrayExport = (state) => state.recipes.recipeArray.filter(heck=>heck===heck);

export const selecRecipeByRecipeId = (mealId) => (state) => {
    return state.recipes.recipeArray.filter((recipe)=>recipe.mealId===parseInt(mealId));
};

// export const selectNewRecipe = (state) => {
//     return state.recipes.arrayToString;
    
// }