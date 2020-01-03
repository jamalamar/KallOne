import React, { useState } from 'react';
import {Link} from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import NavDropdown from 'react-bootstrap/NavDropdown'


function NavBar (props) {

  return (
    <div className="App">
        <Navbar 
          collapseOnSelect expand="lg" 
          fixed="top"
          style={style.nav}
          bg='light'
          >
            <Navbar.Brand style={style.brand} as={Link} to='/' >
              <img src='/Assets/KallOne_Logo.png' style={style.logo}/>
            </Navbar.Brand>

            <Dropdown>
              <Dropdown.Toggle variant="light" size="sm" id="dropdown-basic">
                <img src="/Assets/contact.png"/>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>
                  <a HREF="tel:+(507)-6532-9577"><img src="/Assets/phone.png"/>+(507)-6532-9577</a>
                </Dropdown.Item>
                <Dropdown.Item >
                  <a HREF="mailto:contacto@kall-one.com"><img src="/Assets/mail.png"/>contacto@kall-one.com</a>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav" >
              <Nav className="ml-auto" style={style.navItems} collapseOnSelect={true}>
              <Button as={Link} to='/' style={style.link} variant="light">Inicio</Button>
              <Button as={Link} to="/QuienesSomos" style={style.link} variant="light">Quiénes somos</Button>
              <Dropdown style={style.link}>
                <Button as={Link} to='/Productos' variant="light">Productos</Button>

                <Dropdown.Toggle split variant="light" id="dropdown-split-basic" />

                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/Vehículos">Vehículos</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item as={Link} to="/Climatización">Equipo de Climatización</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Button as={Link} to='/Contacto' style={style.link} variant="light">Contacto</Button>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
  );
}


const style = {
  logo: {
    width: '170px',
    margin: '0em 0em 0em 0em',
    padding: '0em 1em 0em 1em',
  },
  nav: {
    
  },
  navItems: {
    letterSpacing: '0.1em',
    fontWeight: '702',
  },
  link: {
    margin: '0em 0em 0em 1.2em'
  },
  contact: {
    fontSize: '12px',
  }
}


export default NavBar;