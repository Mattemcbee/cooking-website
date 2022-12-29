import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectRecipeById } from '../features/meals/MealsSlice';
import MealsDetail from '../features/meals/MealsDetails';
import RecipeListFormat from '../features/recipes/RecipeList';
import { selectMealById } from '../features/meals/MealsSlice';
import MealsRecipe from '../features/meals/MealsRecipe';

const MealDetailPage = () => {
    const { mealId } = useParams();
    const meal = selectMealById(mealId);

    return(
        <Container fluid className='homeBackground'>
            <Row>
                <MealsDetail meal={meal} />
                <MealsRecipe meal={meal} />
                {/* <RecipeListFormat mealId={mealId}/> */}
              
            </Row>
        </Container>
    );
};

export default MealDetailPage;