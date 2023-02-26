import { Card, CardImg, CardText, CardBody, Col, Row, Container } from 'reactstrap';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

const ProjectListing = ({ meal }) => {

    const { image, image2, name, time, level, recipeOut, calories, ingredients, disc } = meal;

    return (

        <Col xs={{ size: '10', offset: '1' }} md={{ size: '8', offset: '0' }} className='mt-10'>
            <Card className='cardStyle NoDecorationCardText'>
                <CardBody className='cardStyle NoDecorationCardText text-center'>
                    <Container>
                        <Row>
                            <h3>About the {name} project</h3>
                        </Row>
                    </Container>
                </CardBody>
                <CardBody className='cardRecipeStyle '>
                    {disc}
                </CardBody>

            </Card>
        </Col>
    );
};

export default ProjectListing;