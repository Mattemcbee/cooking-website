import {
    Card,
    CardBody,
    CardImg,
    CardText,
    CardImgOverlay,
    CardTitle,
    Col,
    Row,
    Container,
    Label,
    FormGroup,
    Button,
  } from "reactstrap";
  import { Link } from "react-router-dom";
  import IngredientListAll from "./IngredientList";
  import { Formik, Field, Form, ErrorMessage } from "formik";
  import stringArrayPush from "../recipes/RecipeFilterFromCheck";
  import { filterIngredientsByTrue } from "./MealsSlice";
  import MealsList from "./MealsList";
  
  const IngredientSelection = (props) => {
    // const IngredientSelection = ({ list }) => {
    // const { id, image, name, time, level, calories } = list;
  
    // const handleSubmit = (values, { resetForm }) => {
    //     console.log('form values:', values);
    //     console.log('in JSON format:', JSON.stringify(values));
    //     resetForm();
    //     // let array = []
    //     // let checkboxes = document.querySelectorAll('input[type=checkbox]:checked')
    //     // for (let i = 0; i < checkboxes.length; i++) {
    //     //     array.push(checkboxes[i].value)
    //     // }
    //     // const stringArray= JSON.stringify(array);
    //     console.log(filterIngredientsByTrue()
    //     ,'filter in ()')
    //     stringArrayPush();
  
    //     MealsList();
  
    // };
  
    return (
      <>
        <Formik
          initialValues={{
            agree: false,
            value: "",
          }}
          onSubmit={props.handleFilterSelection}
        >
          <Form>
            <FormGroup row>
              {/* <Label check>
                          <Field
                              name='agree'
                              type='checkbox'
                              className='form-check-input'
                              value={time}
                          />{' '}
                          {name}
                      </Label> */}
              <label>
                <Field type="checkbox" name="checked" value="bacon" />
                Bacon
              </label>
              <label>
                <Field type="checkbox" name="checked" value="bagel" />
                Bagel
              </label>
              <label>
                <Field type="checkbox" name="checked" value="beans" />
                Beans
              </label>
              <label>
                <Field type="checkbox" name="checked" value="beef" />
                Beef
              </label>
              <label>
                <Field type="checkbox" name="checked" value="cheese" />
                Cheese
              </label>
              <label>
                <Field type="checkbox" name="checked" value="chicken" />
                Chicken
              </label>
              <label>
                <Field type="checkbox" name="checked" value="eggs" />
                Eggs
              </label>
              <label>
                <Field type="checkbox" name="checked" value="garlic" />
                Garlic
              </label>
              <label>
                <Field type="checkbox" name="checked" value="lettuce" />
                Lettuce
              </label>
              <label>
                <Field type="checkbox" name="checked" value="noodle" />
                Noodle
              </label>
              <label>
                <Field type="checkbox" name="checked" value="onion" />
                Onion
              </label>
              <label>
                <Field type="checkbox" name="checked" value="potatoes" />
                Potatoes
              </label>
              <label>
                <Field type="checkbox" name="checked" value="rice" />
                Rice
              </label>
              <label>
                <Field type="checkbox" name="checked" value="salmon" />
                Salmon
              </label>
              <label>
                <Field type="checkbox" name="checked" value="tomato" />
                Tomato
              </label>
            </FormGroup>
            <FormGroup className="text-center">
              <Row className="text-center">
                <Col className="text-center" md={{ size: 10, offset: 2 }}>
                  <Button
                    type="submit"
                    className="mb-2 text-center"
                    style={{ backgroundColor: "#fefae0", color: "#787878" }}
                  >
                    Submit Recipe
                  </Button>
                </Col>
              </Row>
            </FormGroup>
          </Form>
        </Formik>
      </>
    );
  };
  
  //doesn't do anything just keeps function together for now
  let array = [];
  let checkboxes = document.querySelectorAll("input[type=checkbox]:checked");
  for (let i = 0; i < checkboxes.length; i++) {
    array.push(checkboxes[i].value);
  }
  export const stringArray = JSON.stringify(array);
  console.log(stringArray, "string outside?");
  // end
  
  export default IngredientSelection;