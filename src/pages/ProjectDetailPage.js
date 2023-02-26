import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectRecipeById } from '../features/meals/MealsSlice';
import ProjectDetails from '../features/meals/ProjectDetails';
import RecipeListFormat from '../features/recipes/RecipeList';
import { selectMealById } from '../features/meals/MealsSlice';
import ProjectListing from '../features/meals/ProjectListing';
import Header from '../components/Header';

const ProjectDetailPage = () => {
    const { mealId } = useParams();
    const meal = selectMealById(mealId);

    return(
        <Container fluid className='homeBackground'>
            <Header />
            <Row>
                <h1>{meal.name}</h1>
                <ProjectDetails meal={meal} />
                <ProjectListing meal={meal} />
                {/* <RecipeListFormat mealId={mealId}/> */}
              
            </Row>
        </Container>
    );
};

export default ProjectDetailPage;