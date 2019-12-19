import React, { useState } from 'react';
import {Link} from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import NavDropdown from 'react-bootstrap/NavDropdown'


function NavBar (props) {

  return (
    <div className="App">
        <Navbar 
          collapseOnSelect expand="lg" 
          fixed="top"
          bg='light'
          variant='light'
          >
            <Navbar.Brand style={style.brand} as={Link} to='/' >
              <img src='/Assets/KallOne_Logo.png' style={style.logo}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto" style={style.navItems}>
              <Nav.Link as={Link} to='/' style={style.link}>Inicio</Nav.Link>
              <Nav.Link as={Link} to="/QuienesSomos" style={style.link}>Quienes somos</Nav.Link>
              <NavDropdown title="Productos">
                <NavDropdown.Item as={Link} to='/Productos' >Aire Acondicionado</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to='/Productos' >Camiones</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to='/Contacto' style={style.link}>Contacto</Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
  );
}


const style = {
  logo: {
    width: '170px',
    margin: '0em 2em 0em 2em',
    padding: '0em 1em 0em 1em',
  },
  navItems: {
    letterSpacing: '0.1em',
    fontWeight: '702',
  },
  link: {
    margin: '0em 0em 0em 1em'
  }
}


export default NavBar;