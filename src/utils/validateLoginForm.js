export const validateLoginForm = (values) => {
    const errors = {};
    if(!values.userName) {
        errors.userName = 'Required'; 
    }
    if (values.userName.length < 2) {
        errors.userName = 'Must be at least 2 characters.';
    }
    else if (values.userName.length > 15) {
        errors.userName = 'Must be 15 characters or less.';
    }

    if(!values.userPassword) {
        errors.userPassword = 'Required'; 
    }
    if (values.userPassword.length < 2) {
        errors.userPassword = 'Must be at least 2 characters.';
    }
    else if (values.userPassword.length > 15) {
        errors.userPassword = 'Must be 15 characters or less.';
    }
    return errors;
}