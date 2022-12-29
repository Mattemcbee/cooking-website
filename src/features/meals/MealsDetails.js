import { Card, CardImg, CardText, CardBody, Col, Row } from 'reactstrap';

const MealsDetail= ({meal}) => {

    const { image, name, time, level, recipeOut } = meal;

    return ( 
        <Col md={{size:'4', offset:'0'}} xs={{size:'10', offset:'1'}}>
            <Card className='cardStyle '>
                <h2 className='cardStyle'>{name}</h2>
                <CardImg top src={image} alt={name} />
                
            </Card>
        </Col>
        
    );
};

export default MealsDetail;