import { Col, Container, Row, Button } from "reactstrap";
import {
  selectAllIngredients,
  selectMealByIngredient,
  filterIngredientsByTrue,
  filterObj,
} from "./MealsSlice";
import MealCard from "./MealsCard";
import IngredientSelection from "./IngredientSelection";

const IngredientListAll = (props) => {
  const allIngredients = selectAllIngredients();
  // const items = [selectAllRecipies(), selectMealByIngredient()];
  // const meals = filterObj();
  // const handleSubmit = (values) => {
  //     console.log('form values:', values);
  // };

  return (
    <>
      <Row className="ms-auto">
        {/* {allIngredients.map((list) => {
                    return ( */}
        {/* <Col md='12' className='' key={list.id}> */}
        <Col md="12" className="">
          {/* <IngredientSelection list={list} /> */}
          <IngredientSelection
            handleFilterSelection={props.handleFilterSelection}
          />
        </Col>
        {/* );
                })} */}
      </Row>
      {/* // <Row className='ms-auto'>
        //     {items.map((meal, idx) => { */}
      {/* //         return (
                //             meal && (
                //             <Col md='5' className='m-4' key={idx}>
                //                 <MealCard meal={meal} />
                //             </Col>
                //         )
                //         );
                //     })}
                // </Row> */}
      {/* <Row >
                    <Col md={{ size: 10, offset: 2 }}>
                        <Button type='submit' className='mb-2' style={{ backgroundColor: '#fefae0', color: '#787878' }} >
                            Submit Recipe
                        </Button>
                    </Col>
                </Row> */}
    </>
  );
};

export default IngredientListAll;
