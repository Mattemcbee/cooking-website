import { Card, CardImg, CardText, CardBody, Col, Row, Container } from 'reactstrap';

const MealsRecipe = ({ meal }) => {

    const { image, name, time, level, recipeOut, calories, ingredients } = meal;
    const ingredientsMap = ingredients.map((ingredient) =>
        <li>{ingredient}</li>
    );
    const recipeMap = recipeOut.map((rec) =>
        <li>{rec}</li>
    );
    return (

        <Col  xs={{size:'10', offset:'1'}} md={{size:'8', offset:'0'}} className='mt-10'>
            <Card className='cardStyle NoDecorationCardText'>
                <CardBody className='cardStyle NoDecorationCardText text-center'>
                    <Container>
                        <Row>
                            <Col xs='4'>
                                <CardText>Time: {time} minutes</CardText>
                            </Col>
                            <Col xs='4'>
                                <CardText>Difficulty: {level}</CardText>
                            </Col>
                            <Col xs='4'>
                                <CardText>{calories} Calories</CardText>
                            </Col>
                        </Row>
                    </Container>
                </CardBody>
                <CardBody className='cardRecipeStyle '>
                    <h3>Ingredients</h3>
                    <ul>{ingredientsMap}</ul>
                </CardBody>
                <CardBody className='cardRecipeStyle'>
                    <h3>Directions</h3>
                    <ol>{recipeMap}</ol>
                </CardBody>
            </Card>
        </Col>
    );
};

export default MealsRecipe;