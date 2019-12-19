import React from 'react'
import {Link} from 'react-router-dom';

import Carousel from 'react-bootstrap/Carousel'


function Home(){
	return(
		<div>

			<Carousel style={style.carousel}>
			  <Carousel.Item>
			    <img
			      className="d-block w-100"
			      src="Assets/transfer2/Slide_One.jpg"
			      alt="First slide"
			    />
			    <Carousel.Caption>
			      <h3>First slide label</h3>
			      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
			    </Carousel.Caption>
			  </Carousel.Item>
			  <Carousel.Item>
			    <img
			      className="d-block w-100"
			      src="Assets/transfer2/Slide_One.jpg"
			      alt="Third slide"
			    />

			    <Carousel.Caption>
			      <h3>Second slide label</h3>
			      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
			    </Carousel.Caption>
			  </Carousel.Item>
			  <Carousel.Item>
			    <img
			      className="d-block w-100"
			      src="Assets/transfer2/Slide_One.jpg"
			      alt="Third slide"
			    />

			    <Carousel.Caption>
			      <h3>Third slide label</h3>
			      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
			    </Carousel.Caption>
			  </Carousel.Item>
			</Carousel>

		</div>
	)
}

const style = {
	carousel: {
		margin: 'auto',
		padding: '5em 0em 0em 0em',
		width: '100%',
	}
}

export default Home;