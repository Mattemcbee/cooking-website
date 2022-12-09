import { Col, Row } from 'reactstrap';
import { selectAllRecipies } from './MealsSlice';
import MealCard from '../meals/MealsCard';

const MealsList = () => {
    const meals = selectAllRecipies();
    return (
        <Row className='ms-auto'>
            {meals.map((meal)=>{
                return(
                    <Col md='5' className='m-4' key={meal.id}>
                        <MealCard meal={meal} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default MealsList;