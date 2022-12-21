import { Col, Container, Row } from 'reactstrap';
import validateAddRecipeForm from '../components/AddRecipeForm';
import AddRecipeForm from '../components/AddRecipeForm';

const AddRecipePage = () => {
    return (
        <Container fluid className='homeBackground'>
            <Row className='row-content'>
                <Col xs='12'>
                    <h1>Suggest a recipe</h1>
                    <hr />
                </Col>
                <Col md='10'>
                    <AddRecipeForm />
                </Col>
            </Row>
        </Container>
    )
};

export default AddRecipePage;