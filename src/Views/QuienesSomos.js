import React from 'react'

import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'


function QuienesSomos(){
	return(
			<Jumbotron fluid style={style.header}>
			  <Container>
			    <div>
				    <img src='Assets/KallOne_Logo.png' style={style.LogoHeader}/>
			    </div>
			    {/*<Button as={Link} to='/About' variant="outline-dark" size="lg" style={style.button}>Learn More</Button>*/}
			  </Container>
			</Jumbotron>
	)
}
const style = {
	header: {
	    fontSize: '',
	    backgroundImage: 'url(/Assets/People.jpg)',
	    backgroundPosition: 'center',
	    backgroundRepeat: 'no-repeat',
	    backgroundSize: 'cover',
	    textAlign: 'center',
	    padding: '8em 0em 10em 0em',
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
	  }
}

export default QuienesSomos;