import { Card, CardImg, CardText, CardBody, Col, Row } from 'reactstrap';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

const ProjectDetails= ({meal}) => {

    const { image, image2, disc, imageDisc, imageDisc2, name, time, level, recipeOut } = meal;

    return ( 
        <Col md={{size:'4', offset:'0'}} xs={{size:'10', offset:'1'}}>
            <Card className='cardStyle '>
            <Carousel>
                    <Carousel.Item >
                        <img
                            className="d-block w-100"
                            src={image}
                            alt="Image One"
                        />
                        <Carousel.Caption>
                            <p>{imageDisc}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={image2}
                            alt="Image Two"
                        />
                        <Carousel.Caption>
                            <p>{imageDisc2}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>            </Card>
        </Col>
        
    );
};

export default ProjectDetails;