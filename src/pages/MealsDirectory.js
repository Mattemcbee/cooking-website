import { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import MealsSlice from '../features/meals/MealsSlice';
import MealsList from '../features/meals/MealsList';

const MealsDirectoryPage = () =>{
    

    return(
        <Container>
            <Row>
                <Col>
                    <MealsList />
                </Col>
            </Row>
        </Container>
    );
};

export default MealsDirectoryPage;

