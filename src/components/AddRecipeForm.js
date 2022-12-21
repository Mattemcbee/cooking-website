



import { Button, Label, Col, FormGroup, Row } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validateAddRecipeForm } from '../utils/validateAddRecipe';

const AddRecipeForm = () => {
    const handleSubmit=(values, { resetForm })=> {
        console.log('form values:', values);
        console.log('in JSON format:', JSON.stringify(values));
        resetForm();
    };
    return (
        
        <Formik 
            initialValues={{
                recipeName: '',
                timeToCook: '',
                ingredientList: '',
                difficulty: 'Easy',
                recipeHowTo: '',
            }}
            onSubmit={handleSubmit}
            validate={validateAddRecipeForm}
        >
            <Form className='formTextStyle text-center '>
                <FormGroup row >
                    <Label htmlFor='recipeName' md='2'>
                        Recipe Name
                    </Label>
                    <Col md='10' >
                        
                        <Field name='recipeName' placeholder='recipe name' className='form-control' className='recipeFormStyle' />
                        <ErrorMessage name='recipeName'>
                            {(msg)=><p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                        
                    </Col>
                </FormGroup>
                <FormGroup row>
                <Label htmlFor='ingredientList' md='2' >
                        Ingredients
                    </Label>
                    <Col md='10' >
                    <Field name='ingredientList' placeholder='ingredient list' className='form-control' className='recipeFormStyle' />
                    <ErrorMessage name='ingredientList'>
                            {(msg)=><p className='text-danger'>{msg}</p>}
                    </ErrorMessage>
                    </Col>
                </FormGroup>
                <FormGroup row>
                <Label htmlFor='difficulty' md='2'>
                        Difficulty
                    </Label>
                    <Col md='4'>
                    <Field name='difficulty' as='select' placeholder='Select' className='form-control' className='recipeFormStyle'  >
                        <option>Easy</option>
                        <option>Medium</option>
                        <option>Hard</option>
                    </Field>
                    </Col>
               
                <Label htmlFor='timeToCook' md='2'>
                        Time (minutes)
                    </Label>
                    <Col md='4'>
                    <Field name='timeToCook' as='select' className='form-control' className='recipeFormStyle'  >
                        <option>5</option>
                        <option>10</option>
                        <option>15</option>
                        <option>20</option>
                        <option>25</option>
                        <option>30</option><option>5</option>
                        <option>35</option>
                        <option>40</option>
                        <option>45</option>
                        <option>50</option>
                        <option>55</option>
                        <option>60</option>
                    </Field>
                    </Col>
                </FormGroup>
                <FormGroup row>
                <Label htmlFor='recipeHowTo' md='2'>
                        Recipe

                    </Label>
                    <Col md='10'>
                    <Field name='recipeHowTo' as='textarea' placeholder='ingredient list' rows='12' className='form-control' className='recipeFormStyle' />
                    <ErrorMessage name='recipeHowTo'>
                            {(msg)=><p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>
                <FormGroup row >
                    <Col md={{size:10 , offset:2 }}>
                        <Button type='submit' style={{backgroundColor:'#fefae0', color:'#787878'}} >
                            Submit Recipe
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        </Formik>
    )
};

export default AddRecipeForm;