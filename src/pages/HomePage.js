import { Container } from 'reactstrap';
import MealsList from '../features/meals/MealsList';

const HomePage = () => {
    return(
        <Container>
            <MealsList />
        </Container>
    );
};

export default HomePage;