import { Card, CardImg, CardText, CardBody, Col } from 'reactstrap';

const MealsDetail= ({recipe}) => {
    const { image, name, time, level } = recipe;

    return ( 
        <Col md='5' className='m-1'>
            <Card>
                <CardImg top src={image} alt={name} />
                <CardBody>
                    <CardText>{level}</CardText>
                </CardBody>
            </Card>
        </Col>
    );
};

export default MealsDetail;