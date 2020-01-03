import React from 'react';

import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

function Vehiculos() {

  return (
      <Container style={style.container}>
        <h1 style={style.title}>VEHÍCULOS</h1>
        <div style={style.divisionTwo}></div> 

      <Card>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk
            of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>


    </Container>
  );
}
const style = {
  
  title: {
      textAlign: 'center',
      padding: '2.5em 0em 0em 0em',
      fontSize: '50px'
    },
    container: {
      margin: 'auto',
      padding: '0em 0em 2em 0em'
    },
    cardText: {
      textAlign: 'justify'
    },
    divisionTwo: {
      margin: '2em 0em 2em 0em',
      width: '100%',
      height: '1em',
      backgroundColor: '#003459'
  },
}

export default Vehiculos;