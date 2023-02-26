import { Card, CardBody, CardImg, CardText, CardImgOverlay, CardTitle, Col, Row, Container } from 'reactstrap';
import { Link } from 'react-router-dom';

const ServiceCard = ({ meal }) =>  {
    const { id, image, name, time, level, calories, icon, disc } = meal;
    
    return (
            <Card className='cardStyle cardBottomSpace'>
                
                <CardBody className='cardStyle'>
                    <Container>
                        <Row>
                        <Col xs='2' className='m-auto' style={{height:'100%'}}>
                        <i className={icon} />
                            </Col>
                            <Col xs='10'>
                            <CardTitle>{name}</CardTitle>

                                <CardText className='NoDecorationCardText'> {disc} </CardText>
                            </Col>
                        </Row>
                    </Container>

                </CardBody>
            </Card>
    );
};

export default ServiceCard;