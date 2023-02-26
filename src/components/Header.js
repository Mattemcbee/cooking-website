import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
  Container,
  Button,
  Modal,
  Label,
  FormGroup,
  ModalHeader, ModalBody
} from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from 'formik';

import { NavLink } from "react-router-dom";
import hatLogo from "../app/assets/img/hatLogo.jpg";
import backDrop from "../app/assets/img/mountain1.jpg";

import LoginForm from "./LoginForm";
import UserLoginForm from "../features/user/UserLoginForm";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Navbar>
      <NavbarBrand className="ms-5" href="/" style={{width:'100%', height:'50px'}}>
        <img src={backDrop} alt="nucamp logo" className="float-start" />
        <h1 className="mt-1">Matt McBee</h1>
      </NavbarBrand>
      {/* <LoginForm /> */}

      <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
      <Collapse isOpen={menuOpen} navbar>
        <Nav className="ms-auto iconColor " navbar  >
          
          <NavItem>
            <NavLink className="nav-link iconColor" to="/">
              <i className="fa fa-home fa-lg iconColor" /> Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link iconColor" to="/about">
              <i className="fa fa-user fa-lg iconColor" /> About
            </NavLink>
          </NavItem>
          <NavItem >
          <span className='nav-link iconColor'
                onClick={() => setModalOpen(true)}><i className="fa fa-phone fa-lg iconColor" /> Contact</span>
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
          </NavItem>

        </Nav>

      </Collapse>
    </Navbar>
  );
};

export default Header;