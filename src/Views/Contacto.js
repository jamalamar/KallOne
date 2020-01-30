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
			<div style={style.divisionThree}></div>
			<div style={style.divisionTwo}></div>
				
				<ContactForm/>
			</div>
			
			<div style={style.divisionTwo}></div>
			<div style={style.divisionThree}></div>

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
						<h2>Ventas y Cotizaciones</h2>
					    <a href="tel:+50765329577"><img src="/Assets/phone.png"/>(Panamá) +507 65329577</a>
					    <br/>
					    <a href="tel:+5215515607150"><img src="/Assets/phone.png"/>(México) +521 5515607150</a>
					    <br/>
					    <a href="mailto:contacto@kall-one. com"><img src="/Assets/mail.png"/> contacto@kall-one.com</a>
				    </Col>
				</Row>
			  </Container>
			</Jumbotron>

			<div style={style.divisionTwo}></div>
			<div style={style.divisionThree}></div>

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
  	padding: '2.5em 0em 0.5em 0em'
  },
  division: {
	margin: '0em 0em 1em 0em',
	width: '100%',
	height: '0.2em',
	backgroundColor: '#55b0d6'
  },
    divisionTwo: {
      margin: '0em 0em 0em 0em',
      width: '100%',
      height: '1em',
      backgroundColor: '#55b0d6'
  },
    divisionThree: {
      margin: '0em 0em 0em 0em',
      width: '100%',
      height: '1em',
      backgroundColor: '#00171f'
  },
  info: {
  	margin: '2em',
  }

}

export default Contacto;