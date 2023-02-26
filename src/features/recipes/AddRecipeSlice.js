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
                    return (true
                    )
            }
            return false;
        });

        return filteredRecipes;
    }
};

export const selectNumberOfFiltered = (filteredIngredients) => (state) => {
    if (filteredIngredients?.length > 0) {
        const numberOfFiltered = state.recipes.recipeArray.filter((recipes) => {
            for (let i = 0; i < filteredIngredients.length; i++) {
                if (
                    JSON.stringify(recipes.ingredients).indexOf(
                        JSON.stringify(filteredIngredients[i])
                    ) > -1
                )
                    return (
                        true
                    )
            }
            return false;
        });

        return numberOfFiltered.length;
    }
};

// export const selectTotalNumberInRecipe= true;

export const selectTotalNumberInRecipe = (filteredIngredients) => (state) => {
    if (filteredIngredients?.length > 0) {
        const numberTotal = filteredIngredients

        return numberTotal.length;
    }
};
// export const selectIngLength = (filteredIngredients) => (state) => {
//     if (filteredIngredients?.length > 0) {
//         const lengthTotal = state.recipes.ingredients

//         return lengthTotal;
//     }
// };
export const selectIngLength = (filteredIngredients) => (state) => {
    if (filteredIngredients?.length > 0) {
        const filteredRecipes = state.recipes.recipeArray.filter((recipes) => {
            for (let i = 0; i < filteredIngredients.length; i++) {
                if (
                    JSON.stringify(recipes.ingredients).indexOf(
                        JSON.stringify(filteredIngredients[i])
                    ) > -1
                )
                    return (state.recipes.recipeArray[i].ingredients
                    )
            }
            return false;
        });
        // const heck=filteredRecipes[0].ingredients.length;
        // const heckAll=()=> {
        //     const heck3;
        //     const heck2;
        //     const heck1;
        //     const heck0;
        //     if (filteredRecipes[3]) {
        //         const heck3=filteredRecipes[3],
        //         const heck2=filteredRecipes[2],
        //         const heck1=filteredRecipes[1],
        //         const heck0=filteredRecipes[0],
        //     } else if (filteredRecipes[2]) {
        //         const heck2=filteredRecipes[2],
        //         const heck1=filteredRecipes[1],
        //         const heck0=filteredRecipes[0],
        //     } else if (filteredRecipes[1]) {
        //         const heck1=filteredRecipes[1],
        //         const heck0=filteredRecipes[0],
        //     } else if (filteredRecipes[0]) {
        //         const heck0=filteredRecipes[0],
        //     }  
        // }
        const heck=filteredRecipes[0].ingredients.length;

        // const help=()=> filteredRecipes.map(heck=>heck.ingredients)
    console.log(filteredRecipes[0].ingredients.length,'filtered recipes')
    console.log(heck,'heck')

        return heck;
    }
};