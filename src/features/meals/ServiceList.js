import { useSelector } from "react-redux";
import { Col, Row } from "reactstrap";
import { selectFilteredRecipes, selectNumberOfFiltered, selectTotalNumberInRecipe, selectIngLength } from "../recipes/AddRecipeSlice";
import ServiceCard from "./ServiceCard";
import { selectAllRecipe } from "../recipes/AddRecipeSlice";
import { INGREDIENTS } from "../../app/shared/INGREDIENTLIST";
import { SKILLS } from "../../app/shared/SKILLS";

const ServiceList = () => {
  
  return (
    <Row className="ms-auto">
      {SKILLS.map((meal) => {
        return (
          <>
            <Col md="6" className="" key={meal.id}>
              <ServiceCard meal={meal} />
            </Col>
          </>
        );
      })}
    </Row>
  );
};

export default ServiceList;