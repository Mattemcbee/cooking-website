import { useSelector } from "react-redux";
import { Col, Row } from "reactstrap";
import { selectFilteredRecipes, selectNumberOfFiltered, selectTotalNumberInRecipe, selectIngLength } from "../recipes/AddRecipeSlice";
import MealCard from "../meals/MealsCard";
import { selectAllRecipe } from "../recipes/AddRecipeSlice";

const MealsList = (props) => {
  const recipes = useSelector(selectAllRecipe);

  const filteredRecipes = useSelector(
    selectFilteredRecipes(props.filteredIngredients)
  );
  const numberOfFiltered = useSelector(
    selectNumberOfFiltered(props.filteredIngredients)
  );
  const numberOfLength = useSelector(
    selectTotalNumberInRecipe(props.filteredIngredients)
  );
  const numberOfLength2 = useSelector(
    selectIngLength(props.filteredIngredients)
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
          <>
          <Col md="6" className="" key={meal.id}>
            <MealCard meal={meal} />
            {numberOfLength} ingredients of {numberOfLength2}

          </Col>
          
          </>
        );
      })}
    </Row>
  );
};

export default MealsList;