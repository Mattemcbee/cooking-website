import { Col, Container, Row, Button, Image, Card, CardImg, CardText, CardBody } from "reactstrap";
import bagel from '../../../src/app/assets/img/bagel.png';
import { Link } from 'react-router-dom';



import {
  selectAllIngredients,
  selectMealByIngredient,
  filterIngredientsByTrue,
  filterObj,
} from "./MealsSlice";
import MealCard from "./ServiceCard";
import IngredientSelection from "./IngredientSelection";

const AboutMe = () => {

  return (

    <Row className="ms-auto">
              <h2 className='cardStyle'>About Me</h2>

      <Col sm="2" className="">
        <Card className=''>
          <CardImg top src={bagel} />

        </Card>
      </Col >


      <Col sm="10">
        <h2 className='fontBasic'>My name is Matt</h2>
        <ul className='list-unstyled fontBasic'>
                            <li>
                                <h2 className='fontBasic'>Home</h2>
                            </li>
                            <li>
                                <h2 className='fontBasic'>homie</h2>
                            </li>
                            <li>
                                <h2 className='fontBasic'>heck</h2>
                            </li>
                            <li>
                                <h2 className='fontBasic'>dang</h2>
                            </li>
                        </ul>

      </Col>

    </Row>

  );
};

export default AboutMe;