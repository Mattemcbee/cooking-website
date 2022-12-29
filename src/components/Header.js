import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
  Container
} from "reactstrap";
import { NavLink } from "react-router-dom";
import hatLogo from "../app/assets/img/hatLogo.jpg";
import LoginForm from "./LoginForm";
import UserLoginForm from "../features/user/UserLoginForm";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Navbar dark color="#DDA15E" sticky="top" expand="md">
      <NavbarBrand className="ms-5" href="/">
        <img src={hatLogo} alt="nucamp logo" className="float-start" />
        <h1 className="mt-1">Get In My Pantry</h1>
      </NavbarBrand>
      <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
      <Collapse isOpen={menuOpen} navbar>
        <Nav className="ms-auto iconColor " navbar  >
          
          <NavItem>
            <NavLink className="nav-link iconColor" to="/">
              <i className="fa fa-home fa-lg iconColor" /> Home
            </NavLink>
          </NavItem>
          {/* <NavItem>
            <NavLink className="nav-link" to="/meal">
              <i className="fa fa-list fa-lg" /> Directory
            </NavLink>
          </NavItem> */}
          {/* <NavItem>
            <NavLink className="nav-link" to="/about">
              <i className="fa fa-info fa-lg" /> About
            </NavLink>
          </NavItem> */}
          <NavItem>
            <NavLink className="nav-link" to="/addrecipe">
              <i className="fa fa-list fa-lg iconColor" /> Add Recipe
            </NavLink>
          </NavItem>
          {/* <NavItem>
            <LoginForm />
          </NavItem> */}
        </Nav>
        <UserLoginForm />

      </Collapse>
    </Navbar>
  );
};

export default Header;