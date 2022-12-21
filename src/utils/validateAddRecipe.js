export const validateAddRecipeForm = ( values ) => {
    const errors = {};

    if(!values.recipeName) {
        errors.recipeName = 'Required';
    } else if (values.recipeName.length < 2) {
        errors.recipeName= 'Must be at least 2 characters';
    } else if (values.recipeName.length > 25 ) {
        errors.recipeName = 'Must be 15 characters or less';
    }

    // if(!values.timeToCook) {
    //     errors.timeToCook = 'Required';
    // } else if (values.timeToCook.length < 2) {
    //     errors.timeToCook= 'Must be at least 2 characters';
    // } else if (values.timeToCook.length > 15 ) {
    //     errors.timeToCook = 'Must be 15 characters or less';
    // }
    if(!values.ingredientList) {
        errors.ingredientList = 'Required';
    } else if (values.ingredientList.length < 2) {
        errors.ingredientList= 'Must be at least 2 characters';
    } else if (values.ingredientList.length > 100 ) {
        errors.recipeName = 'Must be 100 characters or less';
    }
    if(!values.recipeHowTo) {
        errors.recipeHowTo = 'Required';
    } else if (values.recipeHowTo.length < 2) {
        errors.recipeHowTo= 'Must be at least 2 characters';
    } else if (values.recipeHowTo.length > 250 ) {
        errors.recipeHowTo = 'Must be 250 characters or less';
    }

    // const reg= /^\d+$/;
    // if(!reg.test(values.phoneNum)) {
    //     errors.phoneNum='The phone number should contain only numbers';
    // }
    // if(!values.email.includes('@')) {
    //     errors.email='Email should contain a @';
    // }

    return errors;
};

