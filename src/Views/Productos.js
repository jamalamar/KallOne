import React from 'react'

import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'


function Productos(){
	return(
		<div>
			<Container style={style.container}>
				<h1 style={style.title}>NUESTROS PRODUCTOS</h1>
				<div style={style.divisionTwo}></div>
				
				<Row>
					<Col>
						<Card className="bg-light text-dark" as={Link} to="/Climatización">
						  <Card.Img src="Assets/transfer2/airCond.png" alt="Equipo de climatización" stlyle={style.cardImg} />
						  <Card.ImgOverlay >
						    <Card.Title className="mb-3" stlyle={style.cardTitle}>Equipo de climatización</Card.Title>
						    <Card.Text style={style.cardText}>
						      Somos representante autorizado Eberspächer Climate Control Systems.
						       Ofrecemos equipos de climatización, refacciones, etc.
						        Además del servicio, mantenimiento, instalación y reparación de estos.
						    </Card.Text>
						  </Card.ImgOverlay>
						</Card>
					</Col>

					<Col>
						<Card className="bg-light text-dark" as={Link} to="/Vehículos">
						  <Card.Img src="Assets/transfer2/runners.jpg" alt="Camiones" stlyle={style.cardImg} />
						  <Card.ImgOverlay>
						    <Card.Title className="mb-3" stlyle={style.cardTitle}>Vehículos</Card.Title>
						    <Card.Text style={style.cardText}>
						      Somos representante autorizado DINA. 
						      Ofrecemos una amplia gama de autobuses de pasajeros y de carga,
						       refacciones, etc. Además del servicio, mantenimiento y reparación de estos.
						    </Card.Text>
						  </Card.ImgOverlay>
						</Card>
					</Col>
				</Row>

			</Container>
			

		</div>
	)
}

const style = {
	
	title: {
	  	textAlign: 'center',
	  	padding: '2.5em 0em 0em 0em',
	  	fontSize: '50px'
	  },
	  container: {
	  	padding: '0em 0em 3em 0em',
	  },
	  cardText: {
	  	textAlign: 'justify'
	  },
	  cardImg: {
	  	opacity: '0.2'
	  },
      divisionTwo: {
		margin: '2em 0em 2em 0em',
		width: '100%',
		height: '1em',
		backgroundColor: '#003459'
  },
}

export default Productos;