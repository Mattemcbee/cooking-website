import { useState } from "react";
import { Container, Col, Row, Button } from "reactstrap";
import IngredientListAll from "../features/meals/IngredientList";
import MealsList from "../features/meals/MealsList";
import LoginForm from "../components/LoginForm";

const HomePage = () => {
  const [filteredIngredients, setFilteredIngredients] = useState([]);

  const handleFilterSelection = (values) => {
    setFilteredIngredients(values.checked);
    // console.log(setFilteredIngredients(values.checked),'handle filter')

  };

  return (
    <Container fluid className="homeBackground">
      <Row>
        <Col sm="2">
          <Container className="selectorStyle">
            <h2 style={{ fontSize: "2vw", textAlign: "center" }}>
              Ingredients
            </h2>
            <IngredientListAll handleFilterSelection={handleFilterSelection} />
            {/* <LoginForm /> */}
          </Container>
        </Col>
        <Col
          sm={{ size: 8, offset: 1 }}
          className="recipeBackground text-center"
        >
          <h1 className="cardStyle mx-0">Recipes With Your Ingredients</h1>
          <MealsList filteredIngredients={filteredIngredients} />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;