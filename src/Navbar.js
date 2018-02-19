import React from 'react';
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
  Component,
  Label,
   Input, 
   FormText,FormGroup,Container, Row, Col,
   Button, InputGroupAddon,InputGroupText,InputGroup
 } from 'reactstrap';
import logo from './img/logo1.png';




export default class Example extends React.Component {
  
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
       
        <Navbar color="faded" light expand="md" color="warning" >
          <NavbarBrand href="/">
          <img src={logo} width="120px" height="40px" alt="Borong" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <NavItem>   
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
       
      </div>
    );
  }
}