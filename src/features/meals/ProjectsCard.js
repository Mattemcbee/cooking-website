import { Card, CardBody, CardImg, CardText, CardImgOverlay, CardTitle, Col, Row, Container } from 'reactstrap';
import { Link } from 'react-router-dom';

const ProjectCard = ({ meal }) => {
    const { id, image, name, time, level, calories, disc } = meal;

    return (
        <Link className='NoDecorationCardText' to={`${id}`}>
            
            <Card className='cardStyle cardBottomSpace'>

                <CardBody className='cardStyle'>
                    <Container>
                        <Row>
                            <Col xs='2' className='m-auto'>
                                <CardImg src={image} />
                            </Col>
                            <Col xs='10'>
                            <CardTitle>{name}</CardTitle>

                                <CardText className='NoDecorationCardText'> {disc} </CardText>
                            </Col>

                        </Row>
                    </Container>

                </CardBody>
            </Card>
        </Link>
    );
};

export default ProjectCard;