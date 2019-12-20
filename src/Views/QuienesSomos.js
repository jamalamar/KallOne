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
			  
			  <h1>¿QUIÉNES SOMOS?</h1>
			  <div style={style.divisionTwo}></div>

  			  <Row style={style.rowTwo}>
			    <Col lg={true}>
			    	<h3>NUESTRA PROPUESTA DE VALOR</h3>
					<p>En Kall One concentramos nuestros esfuerzos en brindar valor a cada uno 
						de nuestros clientes, ofreciéndoles siempre las mejores marcas del mercado 
						y soluciones integrales desarrolladas por un equipo especializado con una 
						estricta orientación de servicio al cliente.</p>
				</Col>
				<div style={style.divisionFive}></div>
			  </Row>

			  <div style={style.divisionFour}></div>

  			  <Row style={style.rowTwo}>
			    <Col lg={true}>
			    	<h3>POLÍTICA DE CALIDAD</h3>
					<p>En Kall One ofrecemos al mercado autobuses, refacciones automotrices, 
						equipos de aire acondicionado y calefactores de las mejores marcas existentes 
						en el mundo que cumplen con las más altas expectativas de nuestros clientes 
						para su óptimo rendimiento, aplicabilidad, durabilidad y mantenimiento efectivo.</p>
				</Col>
			    <Col lg={true}>
			    	<h3>OBJETIVOS DE CALIDAD</h3>
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



			<Container style={style.container}>
			  
			  <h1>PILARES DE LA EMPRESA</h1>
			  <div style={style.divisionTwo}></div>

  			  <Row style={style.rowTwo}>
			    <Col lg={true}>
			    	<h3>VISIÓN GLOBAL DE NEGOCIOS</h3>
					<p>Para alcanzar cada objetivo planteado, cada colaborador tiene una visión
						integral de la empresa y los socios de negocio.</p>
				</Col>
				<div style={style.divisionFive}></div>
			  </Row>

			  <div style={style.divisionFour}></div>

  			  <Row style={style.rowTwo}>
			    <Col lg={true}>
			    	<h3>INNOVACIÓN EN LOS PROCESOS</h3>
					<p>Cada solución entregada al cliente es desarrollada a partir de las mejores
						prácticas de la industria, encaminadas siempre a una mayor eficiencia y durabilidad.</p>
				</Col>
			  </Row>

			  <div style={style.divisionFour}></div>
			  
			  <Row>
			    <Col lg={true}>
			    	<h3>CALIDAD EN LOS PRODUCTOS</h3>
					<p>Nuestros proveedores se ocupan de cumplir con los más altos estándares
							internacionales de calidad y así asegurarnos de la entrega de valor en cada
							producto vendido.</p>
				</Col>
			  </Row>
			  
			  <div style={style.divisionFour}></div>
			  
			  <Row>
			    <Col lg={true}>
			    	<h3>PROFESIONALISMO Y COMPROMISO</h3>
					<p>Desempeñamos cada actividad dentro y fuera de la empresa de manera profesional con un total y estricto compromiso y responsabilidad hacia cada
						socio de negocio.</p>
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
	margin: '-2em 0em -2em 0em',
	width: '100%',
	height: '4em',
	backgroundColor: '#00171f'
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
  },
  divisionFour: {
	margin: '1em 0em 1em 0em',
	width: '100%',
	height: '0.1em',
	backgroundColor: '#00171f'
  },
  divisionFive: {
	margin: '0.3em 0em 0.3em 0em',
	width: '0.5em',
	height: '',
	backgroundColor: '#fff'
  },
  container: {
	padding: '4em 2em 2em 2em',
	fontSize: '20px',
	textAlign: 'justify'
},
}

export default QuienesSomos;