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
			      src="Assets/transfer2/Slide_One.jpg"
			      alt="First slide"
			    />
			    <Carousel.Caption style={style.caption}>
			      <h2>Visión Global de Negocios</h2>
			      <p>Para alcanzar cada objetivo planteado, cada colaborador tiene una visión conjunta de la empresa y los socios de negocios.</p>
			    </Carousel.Caption>
			  </Carousel.Item>

			  <Carousel.Item style={style.carouselItem}>
			    <img
			      className="d-block w-100"
			      src="Assets/transfer2/Slide_Two.jpg"
			      alt="Third slide"
			    />

			    <Carousel.Caption style={style.caption}>
			      <h2>Calidad en los Productos</h2>
			      <p>Nuestros proveedores se ocupan de cumplir con los más altos estándares de calidad y así asegurar la entrega de valor en cada producto.</p>
			    </Carousel.Caption>
			  </Carousel.Item>

			  <Carousel.Item style={style.carouselItem}>
			    <img
			      className="d-block w-100"
			      src="Assets/transfer2/Slide_One.jpg"
			      alt="Third slide"
			    />

			    <Carousel.Caption style={style.caption}>
			      <h2>Profesionalismo y Compromiso</h2>
			      <p>Desarrollamos cada actividad de manera profesional con un total compromiso y responsabilidad hacia cada socio de negocios.</p>
			    </Carousel.Caption>
			  </Carousel.Item>
			</Carousel>

			<Container style={style.container}>
			  <Row>
			    <Col lg={true}>
			    	<h1>Nuestra Misión</h1>
					<p>Satisfacer las necesidades de transporte y climatización del mercado ofreciendo autobuses, 
					equipos de climatización y refacciones automotrices de calidad, 
					así como soluciones para su uso óptimo y mantenimiento.</p>
				</Col>
			    <Col lg={true}>
			    	<h1>VISIÓN</h1>
					<p>Convertirnos en los siguientes cinco años en una de las principales 
					empresas del mercado centroamericano en la comercialización de autobuses, 
					equipos de climatización, así como en refacciones automotrices 
					y soluciones integrales para medios de transporte masivos.</p>
			    </Col>
			  </Row>

			</Container>		

		</div>
	)
}

const style = {
	carousel: {
		padding: '5em 0em 0em 0em'
	},
	carouselItem: {
		height: '450px',
	},
	caption: {
		color: '#fff',
		padding: '1.5em',
		backgroundColor: 'rgba(0,0,0,0.6)'
	},
	container: {
		padding: '2em'
	}
}

export default Home;