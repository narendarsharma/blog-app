import React, { useState } from 'react';
import { NavLink as ReactLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

  
const CustomNavbar=(args)=>{
  const [isOpen, setIsOpen] = useState(false);


 const[login, setlogin]=useState(false);

 
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar 
      style={{ backgroundColor: "#0080ff" }}
    dark
      expand="md"
      fixed=''
      className="px-5"

>
        <NavbarBrand tag={ReactLink} to="/">Learning2Learn</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
          <NavItem>
              <NavLink tag={ReactLink} to="/">Home</NavLink>
            </NavItem>
          <NavItem>
              <NavLink tag={ReactLink} to="/Services">Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="/about">About</NavLink>
            </NavItem>
           
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                ContactUs
              </DropdownToggle>
              <DropdownMenu right>
                {/* <DropdownItem tag={ReactLink} to="/Services">Services</DropdownItem> */}
                <DropdownItem>Instagram</DropdownItem>
                <DropdownItem>LinkedIn</DropdownItem>

                <DropdownItem divider />
                <DropdownItem>YouTube</DropdownItem>
                <DropdownItem>FaceBook</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            
          </Nav>
          <Nav navbar>
          <NavItem >
              <NavLink tag={ReactLink} to="/login" x>
               Login
              </NavLink>
            </NavItem>
            <NavItem >
              <NavLink tag={ReactLink} to="/singup"  >
               SingUp
              </NavLink>
            </NavItem>

          </Nav>
          
        </Collapse>
      </Navbar>
    </div>
  );
}

export default CustomNavbar;