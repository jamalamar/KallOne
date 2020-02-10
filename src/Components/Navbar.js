import React, { useState } from 'react';
import {Link} from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function NavBar (props) {

  return (
    <div className="App">
        <Navbar 
          collapseOnSelect
          expand="lg" 
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
                <Dropdown.Item href="tel:+50765329577"><img src="/Assets/phone.png"/>(Panamá) +507 65329577</Dropdown.Item>
                <Dropdown.Item href="tel:+5215515607150"><img src="/Assets/phone.png"/>(México) +521 5515607150</Dropdown.Item>
                <Dropdown.Item href="mailto:contacto@kall-one.com"><img src="/Assets/mail.png"/>contacto@kall-one.com</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            
          
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav" >
              <Nav className="ml-auto" style={style.navItems}>
              <Nav.Link href="#" style={style.link}><Button as={Link} to='/' variant="light">Inicio</Button></Nav.Link>
              <Nav.Link href="#" style={style.link}><Button as={Link} to='/Productos' variant="light">Productos</Button></Nav.Link>
              
              
              <Dropdown variant="link" style={style.dropdown}>

                <Dropdown.Toggle split variant="light" id="dropdown-split-basic"/>

                <Dropdown.Menu >
                  <Nav.Link href="#"><Dropdown.Item as={Link} to="/Vehículos">Vehículos Nuevos</Dropdown.Item></Nav.Link>
                  <Dropdown.Divider />
                  <Nav.Link href="#"><Dropdown.Item as={Link} to="/Climatización">Equipo de Climatización</Dropdown.Item></Nav.Link>
                  <Dropdown.Divider />
                  <Nav.Link href="#"><Dropdown.Item as={Link} to="/Contacto">Proyectos Especiales</Dropdown.Item></Nav.Link>                 
                  <Dropdown.Divider />
                  <Nav.Link href="#"><Dropdown.Item as={Link} to="/Contacto">Servicios y Refacciones</Dropdown.Item></Nav.Link>                  
                  <Dropdown.Divider />
                  <Nav.Link href="https://dicomer.mx/" ><Dropdown.Item href="https://dicomer.mx/" ><a
                     href="https://dicomer.mx/" 
                     target='_blank'
                     style={{'textDecoration': 'none', 'color': '#000'}}>
                    Vehículos Seminuevos
                  </a></Dropdown.Item></Nav.Link>
                </Dropdown.Menu>
              </Dropdown>
              
              <Nav.Link href="#" style={style.link}><Button as={Link} to="/QuienesSomos" variant="light">Quiénes Somos</Button></Nav.Link>
              <Nav.Link href="#" style={style.link}><Button as={Link} to='/Contacto' variant="light">Contacto</Button></Nav.Link>
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
  dropdown: {
    margin: 'auto',
  },
  link: {
    margin: 'auto',
  },
  contact: {
    fontSize: '12px',
  }
}


export default NavBar;