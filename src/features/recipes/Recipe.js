import { Col } from 'reactstrap';

export const RecipeDetails = ({ recipe }) => {
    const { name, time } = recipe;
    return (
        <Col>
            <p>
                {name}
                <br />
                {time} minutes
            </p>
        </Col>
    );
};

export default RecipeDetails;