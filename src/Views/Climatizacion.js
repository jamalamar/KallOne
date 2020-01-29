import React from 'react';

import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

function Climatizacion() {

  return (
      <Container style={style.container}>
        <h1 style={style.title}>EQUIPOS DE CLIMATIZACIÓN</h1>
        <div style={style.divisionTwo}></div> 

        <Card bg="light">
              <Card.Img variant="top" src="Assets/transfer2/AC 353.png" />
                <Card.ImgOverlay>
                </Card.ImgOverlay>
            <Card.Body>
              <Card.Title style={style.cardTitle}>AC 353</Card.Title>
              <Card.Text style={style.cardText}>
                <p>El AC 353 ha demostrado una superioridad modélica
                   con la que ofrece a nivel mundial soluciones que logran el mas 
                   avanzado confort de los pasajeros. A menudo copiado, pero nunca 
                   igualado: el AC 353 es sinónimo de absoluto desempeño y confiabilidad. 
                   El sistema AC353 G4 aun va un paso mas allá y establece nuevos estándares 
                   de liderazgo en climatización de autobuses.</p>

                 <ul style={style.cardList}>
                   <li style={style.listItem}>Completo espectro de capacidades para aplicaciones en zonas climáticas templadas y países cálidos.</li>
                   <li style={style.listItem}>Diseño modular especialmente compacto gracias a la avanzada tecnología de intercambiador de calor MCHX.</li>
                   <li style={style.listItem}>Sencillo montaje que reduce el trabajo de instalación del fabricante de autobuses.</li>
                   <li style={style.listItem}>Cantidad de refrigerante reducida para un impacto medioambiental menor y menor costo de mantenimiento.</li>
                   <li style={style.listItem}>Superficie de montaje estandarizada en todas las variantes del modelo.</li>
                   <li style={style.listItem}>Reducidos costos de ciclo de vida y mayor facilidad de mantenimiento.</li>
                 </ul>

              </Card.Text>
            </Card.Body>
        </Card>



    </Container>
  );
}
const style = {
  
  title: {
      textAlign: 'center',
      padding: '3em 0em 0em 0em',
      fontSize: '40px'
    },
    container: {
      margin: 'auto',
      padding: '0em 2em 2em 2em',
    },
    card: {
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '85%',
    },
    cardTitle: {
      textAlign: 'justify',
      letterSpacing: '0.2em',
      fontWeight: '900',
    },
    cardText: {
      fontSize: '19px',
      textAlign: 'justify',
      letterSpacing: '0.1em',
      padding: '1em'
    },
    cardList: {
      fontSize: '14px',
      letterSpacing: '0.1em',
      fontWeight: '702',
    },
    listItem: {
      padding: '1em 0em 0em 0em'
    },
    divisionTwo: {
      margin: '2em 0em 2em 0em',
      width: '100%',
      height: '1em',
      backgroundColor: '#003459'
  },
}

export default Climatizacion;
  