import { Card, CardBody, CardImg, CardText, CardImgOverlay, CardTitle, Col, Row, Container, Label, FormGroup, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import IngredientListAll from './IngredientList';
import { Formik, Field, Form, ErrorMessage } from 'formik';


const IngredientSelection = ({ list }) => {
    const { id, image, name, time, level, calories } = list;
    //     return (
    //         <Link to={`${id}`}>
    //             <Card className='cardStyle'>
    //                 <CardBody className='cardStyle'>
    //                     <CardTitle>{name}</CardTitle>
    //                 </CardBody>
    //             </Card>
    //         </Link>
    //     );
    // };
   
    return (
        // <Container className='cardStyle'>
        //     <Row>
        //         <Col>
        <Formik
            initialValues={{
                agree: false,
            }}
        // validate={validateContactForm}
        >
            <Form>
                <FormGroup row>
                    <Label check>
                        <Field
                            name='agree'
                            type='checkbox'
                            className='form-check-input'
                        />{' '}
                        {name}
                    </Label>
                </FormGroup>
                
            </Form>
                    
        </Formik>
        // </Col>
        // </Row>
        // </Container>
    );
};


export default IngredientSelection;