import React from 'react';

import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

function Climatizacion() {

  return (
      <Container style={style.container}>
        <h1 style={style.title}>EQUIPOS DE CLIMATIZACIÓN</h1>
        <div style={style.divisionTwo}></div> 

      <Card>
        <Card.Img variant="top" src="Assets/transfer2/AC353.png" />
          <Card.ImgOverlay>
            <h1 style={style.cardTitle}>AC 353</h1>
          </Card.ImgOverlay>
        <Card.Body>
          <Card.Text style={style.cardText}>
            <p>El AC 353 ha demostrado una superioridad modélica
               con la que ofrece a nivel mundial soluciones que logran el mas 
               avanzado confort de los pasajeros. A menudo copiado, pero nunca 
               igualado: el AC 353 es sinónimo de absoluto desempeño y confiabilidad. 
               El sistema AC353 G4 aun va un paso mas allá y establece nuevos estándares 
               de liderazgo en climatización de autobuses.</p>

             <ul style={style.cardList}>
               <li>Completo espectro de capacidades para aplicaciones en zonas climáticas templadas y países cálidos.</li>
               <br/>
               <li>Diseño modular especialmente compacto gracias a la avanzada tecnología de intercambiador de calor MCHX.</li>
               <br/>
               <li>Sencillo montaje que reduce el trabajo de instalación del fabricante de autobuses.</li>
               <br/>
               <li>Cantidad de refrigerante reducida para un impacto medioambiental menor y menor costo de mantenimiento.</li>
               <br/>
               <li>Superficie de montaje estandarizada en todas las variantes del modelo.</li>
               <br/>
               <li>Reducidos costos de ciclo de vida y mayor facilidad de mantenimiento.</li>
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
      padding: '2.5em 0em 0em 0em',
      fontSize: '50px'
    },
    container: {
      margin: 'auto',
      padding: '0em 0em 2em 0em'
    },
    cardTitle: {
      textAlign: 'justify',
      letterSpacing: '0.2em',
      fontWeight: '900',
    },
    cardText: {
      textAlign: 'justify',
      letterSpacing: '0.1em'
    },
    cardList: {
      letterSpacing: '0.1em',
      fontWeight: '702',
    },
    divisionTwo: {
      margin: '2em 0em 2em 0em',
      width: '100%',
      height: '1em',
      backgroundColor: '#003459'
  },
}

export default Climatizacion;
  