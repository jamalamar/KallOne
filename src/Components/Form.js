import React from 'react';

import { Link } from 'react-router-dom'

import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
 
 function ContactForm (){
 	return(	 	
	 	<div style={style.formContainer}>

			<Form name="KallOneContactForm" method="post" style={style.form}>

				{/*Value set to the same of the Form on Index.html*/}
			    <input type="hidden" name="form-name" value="KallOneContactForm" />

			 <Form.Group controlId="formName&LastName">
			  <Row>
			    <Col>
				  <Form.Label>Nombre Completo</Form.Label>
			      <Form.Control placeholder="Ingresa Nombre" name="Nombre" required/>
			    </Col>
			    <Col>
				  <Form.Label>Empresa</Form.Label>
			      <Form.Control placeholder="Ingresa Nombre de la Empresa" name="Empresa" required/>
			    </Col>
			  </Row>
			 </Form.Group>

			 <Form.Group controlId="formPhone&Country">
			  <Row>
			    <Col>
				  <Form.Label>País</Form.Label>
			      <Form.Control placeholder="Ingresa País" name="País" required/>
			    </Col>
			    <Col>
				  <Form.Label>Teléfono</Form.Label>
			      <Form.Control placeholder="Ingresa Numero Telefónico" name="Teléfono" required/>
			    </Col>
			  </Row>
			 </Form.Group>						 

			  <Form.Group controlId="formBasicEmail">
			  <Row>
			   <Col>
			    <Form.Label>Correo Electrónico</Form.Label>
			    <Form.Control type="email" placeholder="Ingresa Correo Electrónico" name="E-Mail" required/>
			    <Form.Text className="text-muted">
			      Nunca compartiremos su correo electrónico con nadie más.
			    </Form.Text>
				</Col>

			    <Col>
				  <Form.Label>Puesto que ocupa en la Empresa</Form.Label>
			      <Form.Control placeholder="Ingresa Puesto" name="Puesto" required/>
			    </Col>
			    </Row>
				
				</Form.Group>

			  <Form.Group controlId="exampleForm.ControlTextarea1">
			    <Form.Label>Mensaje</Form.Label>
			    <Form.Control as="textarea" rows="3" name="Message"/>
			  </Form.Group>

			  <Button variant="primary" type="submit">
			    Enviar
			  </Button>

			</Form>
		</div>
	)
}


const style = {
	formContainer: {
	  	display: 'flex',
	  	justifyContent: 'center',
	  	margin: '4em 0em 2em 0em',
	 },
	form: {
		width:'85%',
	}
}

export default ContactForm;