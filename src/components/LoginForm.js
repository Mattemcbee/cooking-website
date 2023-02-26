import { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, FormGroup, Label, Container, Row } from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from 'formik';

const LoginForm = () => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            {/* <span style={{backgroundColor:'none', color:'black', border:'2px rounded solid black', borderRadius: '10px', textDecoration:'none', maxHeight:'100%' }}  outline onClick={() => setModalOpen(true)} ><i className="fa fa-sign-in fa-lg"  /> Contact Me </span> */}
            <Button style={{ backgroundColor: '#FFE8D6', border: '2px solid black' }} className='fontBasic'
                onClick={() => setModalOpen(true)}>Contact <i className="fa fa-sign-in fa-lg" /></Button>
            <Modal isOpen={modalOpen}>
                <ModalHeader toggle={(() => setModalOpen(false))} >
                    Let's Talk
                </ModalHeader>
                <ModalBody>
                    <Formik >
                        <Form>
                            
                            <FormGroup>
                                <Label>
                                    Email:
                                </Label>
                                <Label>
                                    <a role='link' className='btn btn-link NoDecorationCardText unstyleLink inline' href='mailto:matthew.mcbee7@gmail.com'>
                                        <i className='fa fa-envelope-o NoDecorationCardText unstyleLink' />Matthew.Mcbee7@gmail.com
                                    </a>
                                </Label>
                            </FormGroup>
                            <FormGroup>
                                <Label>
                                    Phone Number:
                                </Label>
                                <Label>
                                    <a role='link' className='btn btn-link NoDecorationCardText unstyleLink inline' href='tel:+15403306288'>
                                        <i className='fa fa-phone-o NoDecorationCardText unstyleLink' />540-330-6288
                                    </a>
                                </Label>
                            </FormGroup>
                        </Form>
                    </Formik>
                </ModalBody>
            </Modal>
        </>
    )
};

export default LoginForm;