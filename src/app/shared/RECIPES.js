import chicken from '../assets/img/chicken.jfif';
import ramen from '../assets/img/ramen.jpg';
import salad from '../assets/img/salad.png'
export const RECIPES = [
    {
        id: 0,
        name: 'Chicken Parmesean',
        image: chicken,
        time: 45,
        level: 'medium',
        recipeOut: ['Put in oven.', 'Salt it.', 'Add butter'],
        ingredients: ['chicken'],
        calories: 1000,
        pantry: true
    },
    {
        id: 1,
        name: 'Spicy Ramen',
        image: ramen,
        time: 10,
        level: 'easy',
        recipeOut: ['Boil water', 'Add noodles', 'Stir'],
        calories: 500,
        ingredients: ['chicken'],
        pantry: true
    },
    {
        id: 2,
        name: 'Greek Salad',
        image: salad,
        time: 20,
        level: 'easy',
        recipeOut: ['Cut leaves', 'Add onion', 'Mix'],
        calories: 250,
        ingredients: ['lettuce','onion'],
        pantry: true
    }
];
