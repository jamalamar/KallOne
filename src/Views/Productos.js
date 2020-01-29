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
				<div style={style.divisionFour}></div>
				<div style={style.divisionTwo}></div>

				<Row >
					<Col lg={true} style={style.col}>
						<Card className="bg-light text-dark" as={Link} to="/Vehículos">
						    <Card.Body>
						      <Card.Text>
						        <h3 className="mb-1" stlyle={style.cardTitle}>Vehículos Nuevos</h3>
						      </Card.Text>
						    </Card.Body>
						    <Card.Img src="Assets/transfer2/Nuevos.jpg" alt="Camiones" stlyle={style.cardImg} />
						  </Card>
					</Col>

					<Col lg={true} style={style.col}>
						<Card className="bg-light text-dark" as={Link} to="/Climatización" lg={true}>
						    <Card.Body>
						      <Card.Text>
						        <h3 className="mb-1" stlyle={style.cardTitle}>Equipo de Climatización</h3>
						      </Card.Text>
						    </Card.Body>
							  <Card.Img src="Assets/transfer2/Climatizacion.png" alt="Equipo de climatización" stlyle={style.cardImg} />
						  </Card>
					</Col>

					<Col lg={true} style={style.col}>
						
						<a href="http://dicomer.mx/" style={{'textDecoration': 'none'}} target="_blank">
						<Card className="bg-light text-dark">
						    <Card.Body>
						      <Card.Text>
						        <h3 className='mb-1' stlyle={style.cardTitle}>Vehículos Seminuevos</h3>
						      </Card.Text>
						    </Card.Body>
							  <Card.Img src="Assets/transfer2/usados.jpg" alt="Camiones" stlyle={style.cardImg} />
						  </Card>
						 </a>

					</Col>
				</Row>

				<Row >
					<Col lg={true} style={style.col}>
						
						<Card className="bg-light text-dark" as={Link} to="/Contacto">
						    <Card.Body>
						      <Card.Text>
						        <h3 className='mb-1' stlyle={style.cardTitle}>Proyectos Especiales</h3>
						      </Card.Text>
						    </Card.Body>
							  <Card.Img src="Assets/transfer3/diagram.png" alt="Camiones" stlyle={style.cardImg} />
						  </Card>

					</Col>

					

					<Col lg={true} style={style.col}>
						<Card className="bg-light text-dark" as={Link} to="/Contacto" lg={true}>
						<Card.Body>
						      <Card.Text>
						        <h3 className="mb-1" stlyle={style.cardTitle}>Refacciones y Servicios</h3>
						      </Card.Text>
						    </Card.Body>
							  <Card.Img src="Assets/transfer3/Servicioss.png" alt="Equipo de climatización" stlyle={style.cardImg} />
						  </Card>
					</Col>
				</Row>
					
			</Container>

			<div style={style.divisionThree}></div>
			<div style={style.divisionFour}></div>
			

		</div>
	)
}

const style = {
	
	title: {
	  	textAlign: 'center',
	  	padding: '2.5em 0em 0.5em 0em',
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
	  cardTitle: {
	  	fontSize: '20px'
	  },
	  cardText: {
	  	textAlign: 'justify'
	  },
	  cardImg: {
	  	width: ''
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
		backgroundColor: '#55b0d6'
	  },
      divisionFour: {
		margin: '0em 0em 0em 0em',
		width: '100%',
		height: '1em',
		backgroundColor: '#00171f'
	  },
	  cardTitle: {
	  	backgroundColor: 'rgba(0,0,0,0.5)'
	  }

}		

export default Productos;