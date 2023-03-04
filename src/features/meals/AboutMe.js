import { Col, Container, Row, Button, Image, Card, CardImg, CardText, CardBody } from "reactstrap";
import bagel from '../../../src/app/assets/img/bagel.png';
import head from '../../../src/app/assets/img/head.jpg';

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
<Container>
  <Row>
      <Col sm="2" className="">
          <img  style={{borderRadius :"50%", backgroundColor:"red", width: '100%'}}  top src={head} />
      </Col >


      <Col sm="10" className="m-auto">
        <h2 className='fontBasic'>My name is Matt McBee</h2>

        <h4 className='fontBasic'>I am a fullstack developer based in Richmond, VA, and I am passionate and dedicated to my work. With 3 years of professional work experince and 1 year of code experince I have aquired the skills necessary to build great and premium websites.</h4>



      </Col>
      </Row>
      </Container>
    </Row>

  );
};

export default AboutMe;