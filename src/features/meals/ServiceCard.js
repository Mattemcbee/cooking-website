import { Card, CardBody, CardImg, CardText, CardImgOverlay, CardTitle, Col, Row, Container } from 'reactstrap';
import { Link } from 'react-router-dom';

const ServiceCard = ({ meal }) => {
    const { id, image, name, time, level, calories, icon, disc } = meal;

    return (
        <Card className=' ' style={{ height: '150px', marginBottom: '10px' }} >

            <CardBody className='cardStyle m-auto'>
                <Container fluid className=' mt-auto'>
                    <Row className=' mt-auto'>
                        <Col xs='2' className='' style={{ height: '100%', margin: 'auto' }}>
                            <i className={icon} />
                        </Col>
                        <Col className=' mt-auto' xs='10'>
                            <CardTitle>{name}</CardTitle>

                            <CardText className='NoDecorationCardText m-auto'> {disc} </CardText>
                        </Col>
                    </Row>
                </Container>

            </CardBody>
        </Card>
    );
};

export default ServiceCard;