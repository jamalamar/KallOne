import React, {useState} from 'react';

import ContactForm from '../Components/Form'

import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Contacto () {
	return(
		<div>

			<div id="form" style={style.form}>
			    <h1 style={style.titleTwo}>INFORMACIÓN DEL CLIENTE</h1>
				
				<ContactForm/>
			</div>
			
			<div style={style.division}></div>

			<Jumbotron fluid style={style.header}>
			  <Container>
			  	
				    <h1 style={style.title}>INFORMACIÓN DE CONTACTO</h1>

				
				<Row>
					<div style={style.division}></div>

					
					<Col style={style.info}>
						<a target="_blank" href="https://www.google.com/maps/search/Dal%C3%AD+Tower+PH+3a+Enrique+Geenzier,/@8.9887033,-79.5319987,18z"><img src="/Assets/address.png"/></a>
						<br/>
					    <a target="_blank" href="https://www.google.com/maps/search/Dal%C3%AD+Tower+PH+3a+Enrique+Geenzier,/@8.9887033,-79.5319987,18z">Dalí Tower PH 3a Enrique Geenzier, El Cangrejo, Panamá</a>
				    </Col>

				    <div style={style.division}></div>

					<Col style={style.info}>
						<h3>Dirección General</h3>
					    <a href="tel:+52 1 55 27377893">+52 1 55 27377893</a>
					    <br/>
					    <a href="mailto:atanacio.ocampo@kall-one.com">atanacio.ocampo@kall-one.com</a>
				    </Col>
				    <Col style={style.info}>
						<h3>Asuntos Generales</h3>
					    <a href="tel:+(507)-6532-9577">+(507)-6532-9577</a>
					    <br/>
					    <a href="mailto:contacto@kall-one. com">contacto@kall-one. com</a>
				    </Col>
				</Row>
			  </Container>
			</Jumbotron>

			<div style={style.division}></div>

		</div>
	)
}

const style = {
  header: {
    fontSize: '',
    backgroundImage: 'url(/Assets/Contact-Background.jpg)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    padding: '25px',
    textAlign: 'center',
    padding: '2em 0em 4em 0em',
    fontSize: '18px',
	letterSpacing: '0.095em',
	color: '#000',
	backgroundColor: '#fff',
  },
  form: {
  	padding: '0em 0em 0em 0em',
  },
  title: {
  	fontSize: '50px',
  	margin: '0em 0em 1em 0em',
  },
  titleTwo: {
  	fontSize: '50px',
  	textAlign: 'center',
  	paddingTop: '2.5em'
  },
  division: {
	margin: '0em 0em 1em 0em',
	width: '100%',
	height: '0.5em',
	backgroundColor: '#003459'
  },
  info: {
  	margin: '2em',
  }

}

export default Contacto;