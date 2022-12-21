import { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, FormGroup, Label, Container, Row } from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validateLoginForm } from "../utils/validateLoginForm";


const LoginForm = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [userNameShow, showUsername] =useState('');
    const [isShown,setIsShown]=useState(false);
    const [message, setMessage] = useState('');

    
    const handleSubmit = (values) => {
        const login = {
            userName: values.userName,
            userPassword: values.userPassword

        };
        const userNameInput= login.userName;

        setIsShown(current => !current);
        setMessage(userNameInput);
        // const {userNameInput, userPasswordInput}=login;
        // const userNameInput= login.userName;

        console.log(login);
        console.log(userNameInput,'input');
        setModalOpen(false);
    }

    return (
        <>  
            <span style={{backgroundColor:'none', color:'#fefae0', border:'none', textDecoration:'none', maxHeight:'100%' }}  outline onClick={() => setModalOpen(true)} ><i className="fa fa-sign-in fa-lg"  /> Login </span>
                <Container>
                {isShown && ( <><h2 style={{fontSize:'1vw',}} >{` Welcome ${message}`}</h2></>) }
                </Container>
            <Modal isOpen={modalOpen}>
                <ModalHeader toggle={(() => setModalOpen(false))} >
                    Login Here
                </ModalHeader>
                <ModalBody>
                    <Formik initialValues={{ userName: '', userPassword: '' }} onSubmit={handleSubmit} validate={validateLoginForm}>
                        <Form>

                            <FormGroup>
                                <Label htmlFor='userName'>
                                    User Name
                                </Label>
                                <Field
                                    name='userName'
                                    placeholder='User Name'
                                    className='form-control'
                                />
                                <ErrorMessage name='userName'>
                                    {(msg) => <p className='text-danger'>{msg}</p>}
                                </ErrorMessage>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='userPassword'>
                                    Password
                                </Label>
                                <Field
                                    name='userPassword'
                                    placeholder='User Password'
                                    className='form-control'
                                />
                                <ErrorMessage name='userPassword'>
                                    {(msg) => <p className='text-danger'>{msg}</p>}
                                </ErrorMessage>
                            </FormGroup>
                           
                            <Button type='submit' color='primary'>
                                Submit
                            </Button>
                        </Form>
                    </Formik>
                </ModalBody>
            </Modal>
        </>
    )
};

export default LoginForm;