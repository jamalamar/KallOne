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
								
				<Row >
					<Col lg={true} style={style.col}>
						<Card className="bg-light text-dark" as={Link} to="/Vehículos">
						  <Card.Img src="Assets/transfer2/runners.jpg" alt="Camiones" stlyle={style.cardImg} />
						  <Card.ImgOverlay>
						    <h1 className="mb-3" stlyle={style.cardTitle}>Vehículos</h1>
						    {/*
							    <Card.Text style={style.cardText}>
							      Somos representante autorizado DINA. 
							      Ofrecemos una amplia gama de autobuses de pasajeros y de carga,
							       refacciones, etc. Además del servicio, mantenimiento y reparación de estos.
							    </Card.Text>
							*/}
						  </Card.ImgOverlay>
						</Card>
					</Col>

					

					<Col lg={true} style={style.col}>
						<Card className="bg-light text-dark" as={Link} to="/Climatización" lg={true}>
						  <Card.Img src="Assets/transfer2/airCond.png" alt="Equipo de climatización" stlyle={style.cardImg} />
						  <Card.ImgOverlay >
						    <h1 className="mb-3" stlyle={style.cardTitle}>Equipo de Climatización</h1>
						    
						    {/*
						    	<Card.Text style={style.cardText}>
    						      Somos representante autorizado Eberspächer Climate Control Systems.
    						       Ofrecemos equipos de climatización, refacciones, etc.
    						        Además del servicio, mantenimiento, instalación y reparación de estos.
    						    </Card.Text>
						    */}

						  </Card.ImgOverlay>
						</Card>
					</Col>
				</Row>
					
			</Container>
			<div style={style.divisionThree}></div>
			

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
	  	margin: 'auto',
	  	padding: '0em 0em 4em 0em'
	  },
	  col: {
	  	padding: '1.5em'
	  },
	  card: {
	  	width: '100%'
	  },
	  cardText: {
	  	textAlign: 'justify'
	  },
	  cardImg: {
	  	width: '545px'
	  },
      divisionTwo: {
		margin: '2em 0em 2em 0em',
		width: '100%',
		height: '1em',
		backgroundColor: '#003459'
	  },
      divisionThree: {
		margin: '2em 0em 0em 0em',
		width: '100%',
		height: '1em',
		backgroundColor: '#003459'
	  }
}

export default Productos;