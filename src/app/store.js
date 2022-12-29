import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { recipeReducer } from '../features/recipes/AddRecipeSlice';
import { userReducer } from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    recipes: recipeReducer,

    user: userReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])

});