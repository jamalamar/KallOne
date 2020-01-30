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
			    <div style={style.log}>
				    <img src='Assets/KallOne_Logo.png' style={style.LogoHeader}/>
			    </div>
			    {/*<Button as={Link} to='/About' variant="outline-dark" size="lg" style={style.button}>Learn More</Button>*/}
			  </Container>
			</Jumbotron>

			<div style={style.division}></div>
			<div style={style.divisionSix}></div>

			<Container style={style.container}>
			  
			  <h1 style={style.title}>¿QUIÉNES SOMOS?</h1>
			  <div style={style.divisionTwo}></div>

  			  <Row style={style.rowTwo}>
			    <Col lg={true}>
			    	<h3>POLÍTICA DE CALIDAD</h3>
					<p>En Kall One ofrecemos al mercado autobuses, refacciones automotrices, 
						equipos de aire acondicionado y calefactores de las mejores marcas existentes 
						en el mundo que cumplen con las más altas expectativas de nuestros clientes 
						para su óptimo rendimiento, aplicabilidad, durabilidad y mantenimiento efectivo.</p>
				</Col>
				<div style={style.divisionFive}></div>
			    <Col lg={true}>
			    	<h3>NUESTRA PROPUESTA DE VALOR</h3>
					<p>En Kall One concentramos nuestros esfuerzos en brindar valor a cada uno 
						de nuestros clientes, ofreciéndoles siempre las mejores marcas del mercado 
						y soluciones integrales desarrolladas por un equipo especializado con una 
						estricta orientación de servicio al cliente.</p>
				</Col>
			  </Row>

			  <div style={style.divisionFour}></div>

  			  <Row style={style.rowTwo}>
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
				<Col lg={true} >
					<div style={style.badge}>
						<img src="/Assets/SatisfactionBadge.png"/>
					</div>
				</Col>
				
			  </Row>



			</Container>

			<div style={style.division}></div>
			<div style={style.divisionThree}></div>


			<Container style={style.container}>
			  
			  <h1 style={style.titleTwo}>NUESTROS PILARES</h1>

			  

  			  <Row style={style.rowTwo}>
			    <Col lg={true}>
			    	<h3 style={style.titleFour}>VISIÓN GLOBAL DE NEGOCIOS</h3>
					<p>Para alcanzar cada objetivo planteado, cada colaborador tiene una visión
						integral de la empresa y los socios de negocio.</p>
				</Col>
				
				<div style={style.divisionFive}></div>

			    <Col lg={true}>
			    	<h3 style={style.titleFour}>INNOVACIÓN EN LOS PROCESOS</h3>
					<p>Cada solución entregada al cliente es desarrollada a partir de las mejores
						prácticas de la industria, encaminadas siempre a una mayor eficiencia y durabilidad.</p>
				</Col>
			  </Row>

			  
			  
			  <Row>
			    <Col lg={true}>
			    	<h3 style={style.titleFour}>CALIDAD EN LOS PRODUCTOS</h3>
					<p>Nuestros proveedores se ocupan de cumplir con los más altos estándares
							internacionales de calidad y así asegurarnos de la entrega de valor en cada
							producto vendido.</p>
				</Col>

				<div style={style.divisionFive}></div>

			    <Col lg={true}>
			    	<h3 style={style.titleFour}>PROFESIONALISMO Y COMPROMISO</h3>
					<p>Desempeñamos cada actividad dentro y fuera de la empresa de manera profesional con un total y estricto compromiso y responsabilidad hacia cada
						socio de negocio.</p>
				</Col>
			  </Row>

			  <br/>
			
			</Container>
			

			<div style={style.division}></div>
			<div style={style.divisionThree}></div>


			<Container style={style.containerTwo}>
			  
			  <Row style={style.rowTwo}>
				  

				    <Col lg={true}>
					  <h1 style={style.titleThree}>VALORES</h1>
					  
						<ul>
							<li style={style.listItem}>Compromiso en el cumplimiento de las solicitudes de nuestros clientes</li>
							<li style={style.listItem}>Disciplina y exigencia en la entrega de valor a nuestros clientes y accionistas</li>
							<li style={style.listItem}>Profesionalismo e innovación</li>
							<li style={style.listItem}>Calidad en cada producto y servicio</li>
							<li style={style.listItem}>Respeto</li>
							<li style={style.listItem}>Visión integral y de largo plazo</li>
							<li style={style.listItem}>Seguridad para nuestros colaboradores, clientes, sociedad y medio ambiente</li>
						</ul>
					</Col>
					
					<div style={style.divisionFive}></div>
					<div style={style.divisionFive}></div>

				    <Col lg={true}>
					    <h1 style={style.titleThree}>CÓDIGO DE CONDUCTA</h1>
					    
						<ul>
							<li style={style.listItem}>Cumplimiento de la legalidad</li>
							<li style={style.listItem}>Respeto de los derechos humanos y la diversidad</li>
							<li style={style.listItem}>Aseguramiento de la salud y seguridad física</li>
							<li style={style.listItem}>Prohibición de la corrupción</li>
							<li style={style.listItem}>Respeto del medio ambiente</li>
						</ul>
					</Col>
				

				  <div style={style.divisionFour}></div>
			  
			  </Row>
			 </Container>


			 <div style={style.divisionThree}></div>
			 <div style={style.divisionSeven}></div>



		</div>
	)
}
const style = {
header: {
    fontSize: '',
    backgroundImage: 'url(/Assets/banner1.jpg)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    textAlign: 'center',
    padding: '9em 0em 10em 0em',
    fontSize: '18px',
	letterSpacing: '0.095em',
	backgroundColor: '#cccccc',
	opacity: ''
  },
  LogoHeader: {
  	width: '55%',
  	padding: '0em 0em 0em 0em',
  },
  button: {
  	fontWeight: 'bold',
  },
  title: {
  	textAlign: 'center'
  },
  titleTwo: {
  	textAlign: 'center',
  	margin: '-1em 0em 1em 0em',
  	backgroundColor: '',
  	color: '#000'
  },
  titleThree: {
  	textAlign: 'center',
  	padding: '0em 0em 0em 0em',
  	marginTop: '',
  	backgroundColor: '',
  	fontSize: '28px',
  	color: '#55b0d6',
  	backgroundColor: '#fff'
  },
  titleFour: {
  	textAlign: 'center',
  	margin: '0em 0em 1em 0em',
  	backgroundColor: '#55b0d6',
  	color: '#fff'
  },
  division: {
	margin: '-2em 0em -2em 0em',
	width: '100%',
	height: '1em',
	backgroundColor: '#00171f'
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
  divisionFour: {
	margin: '1em 0em 1em 0em',
	width: '100%',
	height: '0.1em',
	backgroundColor: '#55b0d6'
  },
  divisionFive: {
	margin: '0.3em 0em 0.3em 0em',
	width: '1em',
	height: '',
	backgroundColor: '#fff'
  },
  divisionSix: {
	margin: '2em 0em -3em 0em',
	width: '100%',
	height: '1em',
	backgroundColor: '#55b0d6'
  },
  divisionSeven: {
	margin: '0em 0em 0em 0em',
	width: '100%',
	height: '1em',
	backgroundColor: '#00171f'
  },
  container: {
	padding: '4em 2em 2em 2em',
	fontSize: '20px',
	textAlign: 'justify'
  },
  containerTwo: {
	padding: '4em 4em 2em 4em',
	fontSize: '10px',
	textAlign: 'justify',
	letterSpacing: '',
  },
  badge: {
  	textAlign: 'center',
  	opacity: '0.9',
  	paddingTop: '3em'
  },
  listItem: {
  	padding: '0.5em',
  	fontSize: '20px',
  	whiteSpace: '',
  },
  lowercase: {
  	textTransform: 'lowercase',
  	whiteSpace: '',
  	
  }
}

export default QuienesSomos;