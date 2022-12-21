import { Col } from 'reactstrap';
// import { RECIPIES } from '../../app/shared/RECIPIES';
import RecipeDetails from './Recipe';
import { selectRecipeByMealID } from './RecipeSlice';

export const RecipeListFormat = ({ mealId }) => {
    const meals = selectRecipeByMealID(mealId);

    if (meals && meals.length > 0) {
        return (
            <Col md='5' className='m-1'>
                <h4>Recipe: </h4>
                {meals.map((recipe) => {
                    return <RecipeDetails key={recipe.id} recipe={recipe} />;
                })}
            </Col>
        )
    }
    return(
        <Col md='5' className='m-1'>
            no recipe
        </Col>
    )
};

export default RecipeListFormat ;