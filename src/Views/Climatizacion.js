import React from 'react';

import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'

function Climatizacion() {

  return (
      <Container style={style.container}>
        <h1 style={style.title}>EQUIPOS DE CLIMATIZACIÓN</h1>
        <div style={style.divisionThree}></div> 
        <div style={style.divisionTwo}></div>

        <Card bg="light">
              <Card.Img variant="top" src="Assets/transfer2/AC 353.png" />
                <Card.ImgOverlay>
                </Card.ImgOverlay>
            <Card.Body>
              <Card.Title style={style.cardTitle}>AC 353 G4</Card.Title>
              <Card.Text style={style.cardText}>

                <p>El AC 353 ha demostrado una superioridad modélica
                   con la que ofrece a nivel mundial soluciones que logran el mas 
                   avanzado confort de los pasajeros. A menudo copiado, pero nunca 
                   igualado: el AC 353 es sinónimo de absoluto desempeño y confiabilidad. 
                   El sistema AC353 G4 aun va un paso mas allá y establece nuevos estándares 
                   de liderazgo en climatización de autobuses.</p>
              </Card.Text>
              
                 <Table striped bordered variant="dark" size="sm" style={style.table}>
                  <thead>
                    <tr>
                      <th>DATOS TÉCNICOS</th>
                      <th>AC353 G4 I</th>
                      <th>AC353 G4 II</th>
                      <th>AC353 G4 III</th>
                      <th>AC353 G4 IV</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Capacidad de Refrigeración</td>
                      <td>27 kW [92,000 BTU/h]</td>
                      <td>32 kW [109,000 BTU/h]</td>
                      <td>35 kW [120,000 BTU/h]</td>
                      <td>45 kW [154,000 BTU/h]</td>
                    </tr>
                    <tr>
                      <td>Capacidad de Calefacción</td>
                      <td>38 kW [130,000 BTU/h]</td>
                      <td>38 kW [130,000 BTU/h]</td>
                      <td>38 kW [ 130,000 BTU/h]</td>
                      <td>24 kW [82,000 BTU/h]</td>
                    </tr>
                    <tr>
                      <td>Largo</td>
                      <td>3015 mm (118”)</td>
                      <td>3840 mm (151”)</td>
                      <td>3840 mm (151”)</td>
                      <td>3840 mm (151”)</td>
                    </tr>
                    <tr>
                      <td>Ancho</td>
                      <td>1850mm (72”)</td>
                      <td>1850mm(72”)</td>
                      <td>1850mm(72”)</td>
                      <td>1850mm(72”)</td>
                    </tr>
                    <tr>
                      <td>Alto</td>
                      <td>215 mm (8”)</td>
                      <td>215 mm (8”)</td>
                      <td>215 mm (8”)</td>
                      <td>215 mm (8”)</td>
                    </tr>
                    <tr>
                      <td>Peso</td>
                      <td>155 Kg (341 Lbs.)</td>
                      <td>175 Kg (385 Lbs.)</td>
                      <td>180 Kg (396 Lbs.)</td>
                      <td>195 Kg (429 Lbs.)</td>
                    </tr>
                    <tr>
                      <td>Volumen de Aire Evaporador</td>
                      <td>2,600 CFM [4,400 m3/h]</td>
                      <td>3,885 CFM [6,600 m3/h]</td>
                      <td>3,885 CFM [6,600 m3/h]</td>
                      <td>5,179 CFM [8,800 m3/h]</td>
                    </tr>
                    <tr>
                      <td>Consumo Eléctrico @ 24 V</td>
                      <td>72 A</td>
                      <td>94 A</td>
                      <td>94 A</td>
                      <td>128 A</td>
                    </tr>
                    <tr>
                      <td>Refrigerante</td>
                      <td>R 134 a</td>
                      <td>R 134 a</td>
                      <td>R 134 a</td>
                      <td>R 134 a</td>
                    </tr>
                  </tbody>
                </Table>

                 <ul style={style.cardList}>
                   <li style={style.listItem}>Completo espectro de capacidades para aplicaciones en zonas climáticas templadas y países cálidos.</li>
                   <li style={style.listItem}>Diseño modular especialmente compacto gracias a la avanzada tecnología de intercambiador de calor MCHX.</li>
                   <li style={style.listItem}>Sencillo montaje que reduce el trabajo de instalación del fabricante de autobuses.</li>
                   <li style={style.listItem}>Cantidad de refrigerante reducida para un impacto medioambiental menor y menor costo de mantenimiento.</li>
                   <li style={style.listItem}>Superficie de montaje estandarizada en todas las variantes del modelo.</li>
                   <li style={style.listItem}>Reducidos costos de ciclo de vida y mayor facilidad de mantenimiento.</li>
                 </ul>

            </Card.Body>
        </Card>

        <div style={style.divisionTwo}></div>
        <div style={style.divisionThree}></div> 

    </Container>
  );
}
const style = {
  
  title: {
      textAlign: 'center',
      padding: '3em 0em 1em 0em',
      fontSize: '40px'
    },
    container: {
      margin: 'auto',
      padding: '0em 0em 0em 0em',
    },
    card: {
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '100%',
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
      margin: '0em 0em 0em 0em',
      width: '100%',
      height: '1em',
      backgroundColor: '#55b0d6'
  },
    divisionThree: {
      margin: '0em 0em 0em 0em',
      width: '100%',
      height: '1em',
      backgroundColor: '#00171f'
  },
    table: {
      letterSpacing: '0',
      textAlign: 'left',
      fontSize: '10px'
  },
}

export default Climatizacion;
  