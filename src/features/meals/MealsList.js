import { Col, Row } from 'reactstrap';
import { selectAllRecipies, selectMealByIngredient, filterIngredientsByTrue, filterObj,filterExport } from './MealsSlice';
import MealCard from '../meals/MealsCard';
import { stringArray } from './IngredientSelection';


const MealsList = () => {
    const meals = selectAllRecipies();

    const meals2 = filterIngredientsByTrue();

    // const meals2=filterExport();


    // const items = [selectAllRecipies(), selectMealByIngredient()];
    // const meals = filterObj();
    if (meals2.length > 0) {
        return (

            <Row className='ms-auto'>
                {meals2.map((meal)=>{
                        return(
                            <Col md='6' className='' key={meal.id}>
                                <MealCard meal={meal} />
                                <div>meals 2</div>

                            </Col>
                        );
                    })}
            </Row>


        );
    };
    
    if (meals2.length <= 0) {
 
        return (
                <>No recipies
                <Row className='ms-auto'>
                    {meals.map((meal) => {
                        return (
                            <Col md='6' className='' key={meal.id}>
                                <MealCard meal={meal} />
                                <div>meals 1</div>
                            </Col>
                        );
                    })}
                </Row>
                </>

                 
        );
    };
    
};

export default MealsList;