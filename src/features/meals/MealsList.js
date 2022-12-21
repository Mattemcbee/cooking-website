import { Col, Row } from 'reactstrap';
import { selectAllRecipies, selectMealByIngredient, filterIngredientsByTrue, filterObj } from './MealsSlice';
import MealCard from '../meals/MealsCard';


const MealsList = () => {
    const meals = selectAllRecipies();
    // const items = [selectAllRecipies(), selectMealByIngredient()];
    // const meals = filterObj();
    

    return (
        <Row className='ms-auto'>
            {meals.map((meal)=>{
                return(
                    <Col md='6' className='' key={meal.id}>
                        <MealCard meal={meal} />
                    </Col>
                );
            })}
        </Row>
        // <Row className='ms-auto'>
        //     {items.map((meal, idx) => {
        //         return (
        //             meal && (
        //             <Col md='5' className='m-4' key={idx}>
        //                 <MealCard meal={meal} />
        //             </Col>
        //         )
        //         );
        //     })}
        // </Row>

    );
};

export default MealsList;