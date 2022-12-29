import { Card, CardBody, CardImg, CardText, CardImgOverlay, CardTitle, Col, Row, Container } from 'reactstrap';
import { Link } from 'react-router-dom';

const MealCard = ({ meal }) => {
    const { id, image, name, time, level, calories } = meal;
    return (
        <Link className='NoDecorationCardText' to={`${id}`}>
            <Card className='cardStyle cardBottomSpace'>
                <CardImg className='cardStyle'
                    width='100%'
                    src={image}
                    alt={name}
                />
                <CardBody className='cardStyle'>
                    <CardTitle>{name}</CardTitle>
                    <Container>
                        <Row>
                            <Col xs='4'>
                                <CardText className='NoDecorationCardText'>Time: {time} minutes</CardText>
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
            </Card>
        </Link>
    );
};

export default MealCard;