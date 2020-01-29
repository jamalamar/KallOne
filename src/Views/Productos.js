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
						<Card className="bg-dark text-light" as={Link} to="/Vehículos">
						    <Card.Body>
						      <Card.Text>
						        <h1 className="mb-3" stlyle={style.cardTitle}>Vehículos Nuevos</h1>
						      </Card.Text>
						    </Card.Body>
						    <Card.Img src="Assets/transfer2/Nuevos.jpg" alt="Camiones" stlyle={style.cardImg} />
						  </Card>
					</Col>

					

					<Col lg={true} style={style.col}>
						<Card className="bg-dark text-light" as={Link} to="/Climatización" lg={true}>
						    <Card.Body>
						      <Card.Text>
						        <h1 className="mb-3" stlyle={style.cardTitle}>Equipo de Climatización</h1>
						      </Card.Text>
						    </Card.Body>
							  <Card.Img src="Assets/transfer2/Climatizacion.png" alt="Equipo de climatización" stlyle={style.cardImg} />
						  </Card>
					</Col>
				</Row>

				<Row >
					<Col lg={true} style={style.col}>
						
						<a href="http://dicomer.mx/" style={{'textDecoration': 'none'}} target="_blank">
						<Card className="bg-dark text-light">
						    <Card.Body>
						      <Card.Text>
						        <h1 className='mb-3' stlyle={style.cardTitle}>Vehículos Usados</h1>
						      </Card.Text>
						    </Card.Body>
							  <Card.Img src="Assets/transfer2/usados.jpg" alt="Camiones" stlyle={style.cardImg} />
						  </Card>
						 </a>

					</Col>

					

					<Col lg={true} style={style.col}>
						<Card className="bg-dark text-light" as={Link} to="/Servicios" lg={true}>
						<Card.Body>
						      <Card.Text>
						        <h1 className="mb-3" stlyle={style.cardTitle}>Servicios</h1>
						      </Card.Text>
						    </Card.Body>
							  <Card.Img src="Assets/transfer3/Servicioss.png" alt="Equipo de climatización" stlyle={style.cardImg} />
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
	  	width: ''
	  },
      divisionTwo: {
		margin: '2em 0em 2em 0em',
		width: '100%',
		height: '1em',
		backgroundColor: '#55b0d6'
	  },
      divisionThree: {
		margin: '2em 0em 0em 0em',
		width: '100%',
		height: '1em',
		backgroundColor: '#55b0d6'
	  },
	  cardTitle: {
	  	backgroundColor: 'rgba(0,0,0,0.5)'
	  }

}		

export default Productos;