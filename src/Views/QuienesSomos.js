import React from 'react'

import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function QuienesSomos(){
	return(
		<div>
			<Jumbotron fluid style={style.header}>
			  <Container>
			    <div>
				    <img src='Assets/KallOne_Logo.png' style={style.LogoHeader}/>
			    </div>
			    {/*<Button as={Link} to='/About' variant="outline-dark" size="lg" style={style.button}>Learn More</Button>*/}
			  </Container>
			</Jumbotron>

			<div style={style.division}></div>

			<Container style={style.container}>
  			  <Row style={style.rowTwo}>
			    <Col lg={true}>
			    	<h1>NUESTRA PROPUESTA DE VALOR</h1>
					<p>En Kall One concentramos nuestros esfuerzos en brindar valor a cada uno 
						de nuestros clientes, ofreciéndoles siempre las mejores marcas del mercado 
						y soluciones integrales desarrolladas por un equipo especializado con una 
						estricta orientación de servicio al cliente.</p>
				</Col>
			  </Row>


			<div style={style.divisionTwo}></div>


  			  <Row style={style.rowTwo}>
			    <Col lg={true}>
			    	<h1>POLÍTICA DE CALIDAD</h1>
					<p>En Kall One ofrecemos al mercado autobuses, refacciones automotrices, 
						equipos de aire acondicionado y calefactores de las mejores marcas existentes 
						en el mundo que cumplen con las más altas expectativas de nuestros clientes 
						para su óptimo rendimiento, aplicabilidad, durabilidad y mantenimiento efectivo.</p>
				</Col>
			  </Row>


			<div style={style.divisionTwo}></div>


  			  <Row style={style.rowTwo}>
			    <Col lg={true}>
			    	<h1>OBJETIVOS DE CALIDAD</h1>
					<ul>
						<li>Asegurar que los autobuses, equipos de climatización y refacciones ofrecidas 
							al mercado cumplan con los más altos estándares internacionales de calidad.</li>
						
						<br/>

						<li>Eficientar los costos y gastos de las líneas de negocio de la empresa para 
							ofrecer precios competitivos a nuestros clientes y optimizar las utilidades de 
							los socios de la empresa.</li>
					</ul>
				</Col>
			  </Row>


			<div style={style.divisionThree}></div>

			</Container>


		</div>
	)
}
const style = {
header: {
    fontSize: '',
    backgroundImage: 'url(/Assets/buildings.jpg)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    textAlign: 'center',
    padding: '7em 0em 10em 0em',
    fontSize: '18px',
	letterSpacing: '0.095em',
	backgroundColor: '#cccccc',
  },
  LogoHeader: {
  	width: '40%',
  	padding: '0em 0em 0em 0em'
  },
  button: {
  	fontWeight: 'bold',
  },
  division: {
	margin: '0em 0em 0em 0em',
	width: '100%',
	height: '2em',
	backgroundColor: '#00171f'
  },
  divisionTwo: {
	margin: '2em 0em 2em 0em',
	width: '100%',
	height: '1em',
	backgroundColor: '#00171f'
  },
  divisionThree: {
	margin: '2em 0em 0em 0em',
	width: '100%',
	height: '1em',
	backgroundColor: '#00171f'
  },
  container: {
	padding: '4em 2em 2em 2em',
	fontSize: '20px',
	textAlign: 'justify'
},
}

export default QuienesSomos;