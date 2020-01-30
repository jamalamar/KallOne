import React from 'react'
import {Link} from 'react-router-dom';

import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function Home(){
	return(
		<div>
			<Carousel style={style.carousel}>
			  <Carousel.Item style={style.carouselItem}>
			    <img
			      className="d-block w-100"
			      src="Assets/transfer2/Landing3.jpg"
			      alt="First slide"
			    />
			    <Carousel.Caption style={style.caption}>
			      <h2>VISIÓN GLOBAL DE NEGOCIOS</h2>
			      <p>Para alcanzar cada objetivo planteado, cada colaborador tiene una visión
					integral de la empresa y los socios de negocio.</p>
			    </Carousel.Caption>
			  </Carousel.Item>

			  <Carousel.Item style={style.carouselItem}>
			    <img
			      className="d-block w-100"
			      src="Assets/transfer2/Landing2.png"
			      alt="Third slide"
			    />
			    <Carousel.Caption style={style.caption}>
			      <h2>CALIDAD EN LOS PRODUCTOS</h2>
			      <p>Nuestros proveedores se ocupan de cumplir con los más altos estándares
					internacionales de calidad y así asegurarnos de la entrega de valor en cada
					producto vendido.</p>
			    </Carousel.Caption>
			  </Carousel.Item>

			  <Carousel.Item style={style.carouselItem}>
			    <img
			      className="d-block w-100"
			      src="Assets/transfer2/Landing1.jpg"
			      alt="Third slide"
			    />
			    <Carousel.Caption style={style.caption}>
			      <h2>PROFESIONALISMO Y COMPROMISO</h2>
			      <p>Desempeñamos cada actividad dentro y fuera de la empresa de manera 
			      profesional con un total y estricto compromiso y responsabilidad hacia cada
					socio de negocio.</p>
			    </Carousel.Caption>
			  </Carousel.Item>

			  	<Carousel.Item style={style.carouselItem}>
			    <img
			      className="d-block w-100"
			      src="Assets/transfer2/Slide_Two.jpg"
			      alt="Third slide"
			    />
			    <Carousel.Caption style={style.caption}>
			      <h2>INNOVACIÓN EN LOS PROCESOS</h2>
			      <p>Cada solución entregada al cliente es desarrollada a partir de las mejores
					prácticas de la industria, encaminadas siempre a una mayor eficiencia y
					durabilidad.</p>
			    </Carousel.Caption>
			  </Carousel.Item>
			</Carousel>

			<div style={style.division}></div>
			<div style={style.divisionFour}></div>

			<Container style={style.container}>
			  <Row style={style.rowOne}>
			    <Col lg={true}>
			    	<h1 style={style.titles}>PRODUCTOS Y SERVICIOS</h1>
			    	<div style={style.divisionThree}></div>
					<p>En Kall One nos dedicamos a dos principales líneas de negocio; <p style={{'font-weight': '850', 'display': 'inline'}}>la Climatización y el Transporte. </p>
						La primera comprende la venta, distribución, instalación y mantenimiento de un amplio rango de 
						productos para la climatización en medios de transporte masivos, así como sus refacciones y soluciones 
						integrales.</p>

					<p>La segunda comprende la venta, planeación, reparación y mantenimiento de autobuses para transporte de 
						pasajeros y de carga, así como sus refacciones y soluciones integrales de movilidad.</p>

					<p>Ambas líneas de negocio cuentan con los más altos estándares de calidad y la tecnología más avanzada.</p>
			    </Col>
			  </Row>


			<div style={style.divisionTwo}></div>


  			  <Row style={style.rowTwo}>
			    <Col lg={true}>
			    	<h2 style={style.titles}>EQUIPOS DE CLIMATIZACIÓN</h2>
			    	<div style={style.divisionThree}></div>
					<p>Somos representante autorizado Eberspächer
						Climate Control Systems. Ofrecemos equipos de climatización, refacciones,
						 etc. Además del servicio, mantenimiento, instalación y reparación de estos.</p>
				</Col>

			    <Col lg={true}>
			    	<img className="d-block w-100" src="/Assets/eberLogo.png"/>
			    </Col>
			  </Row>

			<div style={style.divisionTwo}></div>

			<Row>
			    <Col lg={true}>
			    	<img className="d-block w-100" src="/Assets/dinaLogo.jpg"/>
				</Col>
			    <Col lg={true}>
			    	<h2 style={style.titles}>VEHÍCULOS DE TRANSPORTE DE PASAJEROS Y CARGA</h2>
			    	<div style={style.divisionThree}></div>
					<p>Somos representante autorizado DINA en México y DIMEX en Centroamérica y el Caribe. 
						Ofrecemos una amplia gama de autobuses de pasajeros y de carga, refacciones, etc. 
						Además del servicio, mantenimiento y reparación de estos.</p>
				</Col>
			</Row>

			<div style={style.divisionTwo}></div>

			  <Row>
			    <Col lg={true}>
			    	<h2 style={style.titles}>VISIÓN</h2>
			    	<div style={style.divisionThree}></div>
					<p>Convertirnos en los siguientes cinco años en una de las principales 
					empresas del mercado centroamericano en la comercialización de autobuses, 
					equipos de climatización, así como en refacciones automotrices 
					y soluciones integrales para medios de transporte masivos.</p>
			    </Col>

			    <Col lg={true}>
			    	<h2 style={style.titles}>MISIÓN</h2>
			    	<div style={style.divisionThree}></div>
					<p>Satisfacer las necesidades de transporte y climatización del mercado ofreciendo autobuses, 
					equipos de climatización y refacciones automotrices de calidad, 
					así como soluciones para su uso óptimo y mantenimiento.</p>
				</Col>
			  </Row>

			</Container>		

		<div style={style.divisionFour}></div>
		<div style={style.division}></div>
		</div>
	)
}

const style = {
	carousel: {
		padding: '0em 0em 0em 0em',
		marginTop: '5em' 
	},
	carouselItem: {
		height: '480px',
	},
	caption: {
		color: '#fff',
		padding: '1.5em',
		backgroundColor: 'rgba(0, 23, 31, 0.6)'
	},
	container: {
		padding: '2em 2em 2em 2em',
		fontSize: '20px',
		textAlign: 'justify'
	},
	division: {
		margin: '0em 0em 0em 0em',
		width: '100%',
		height: '1em',
		backgroundColor: '#00171f'
	},
	divisionTwo: {
		margin: '2em 0em 2em 0em',
		width: '100%',
		height: '0.5em',
		backgroundColor: '#55b0d6'
	},
	divisionThree: {
		margin: '0.5em 0em 0.5em 0em',
		width: '100%',
		height: '0.1em',
		backgroundColor: '#55b0d6'
	},
	divisionFour: {
		margin: '0em 0em 0em 0em',
		width: '100%',
		height: '1em',
		backgroundColor: '#55b0d6'
	},
	rowOne: {

	},
	rowTwo: {

	},
	titles: {
		textAlign: "left",

	}
}

export default Home;