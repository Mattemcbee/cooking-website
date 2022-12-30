import { useSelector } from "react-redux";
import { Col, Row } from "reactstrap";
import { selectFilteredRecipes } from "../recipes/AddRecipeSlice";
import MealCard from "../meals/MealsCard";
import { selectAllRecipe } from "../recipes/AddRecipeSlice";

const MealsList = (props) => {
  const recipes = useSelector(selectAllRecipe);

  const filteredRecipes = useSelector(
    selectFilteredRecipes(props.filteredIngredients)
  );

  if (props.filteredIngredients?.length === 0) {
    return (
      <Row className=" mac ">
        <div>Choose Ingredients To See Recipe</div>
      </Row>
    );
  }

  return (
    <Row className="ms-auto">
      {filteredRecipes.map((meal) => {
        return (
          <Col md="6" className="" key={meal.id}>
            <MealCard meal={meal} />
          </Col>
        );
      })}
    </Row>
  );
};

export default MealsList;
