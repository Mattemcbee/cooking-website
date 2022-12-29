import { Col, Row } from "reactstrap";
import {
  selectFilteredRecipes,
  selectAllRecipies,
  selectMealByIngredient,
  filterIngredientsByTrue,
  filterObj,
  filterExport,
  selectFilteredRecepies,
} from "./MealsSlice";
import MealCard from "../meals/MealsCard";
import { stringArray } from "./IngredientSelection";

const MealsList = (props) => {
  const meals = selectFilteredRecipes(props.filteredIngredients);
  // const meals = selectAllRecipies();

  const meals2 = filterIngredientsByTrue();

  // const meals2=filterExport();

  // const items = [selectAllRecipies(), selectMealByIngredient()];
  // const meals = filterObj();
  if (meals2.length > 0) {
    return (
      <Row className="ms-auto">
        {meals.map((meal) => {
          return (
            <Col md="6" className="" key={meal.id}>
              <MealCard meal={meal} />
              {/* <div>meals 2</div> */}
            </Col>
          );
        })}
      </Row>
    );
  }

  if (meals2.length <= 0) {
    return (
        <Row className=" mac ">
            <div>Choose Ingredients To See Recipe</div>
         
        </Row>
    );
  }
};

export default MealsList;