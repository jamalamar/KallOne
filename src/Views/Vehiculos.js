import React from 'react';

import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'

function Vehiculos() {

  return (
      <div style={style.container}>
        <h1 style={style.title}>VEHÍCULOS</h1>
        <div style={style.divisionTwo}></div> 

        <Row>
          <Col>
            <Card bg="light" >
              <Card.Img variant="top" src="Assets/transfer1/HUSTLER.jpg" />
                <Card.ImgOverlay>
                            
                </Card.ImgOverlay>

              <Card.Body>
                <Card.Title style={style.cardTitleTwo}>HUSTLER</Card.Title>
                <Card.Text >
 
                  <ListGroup >
                    <ListGroup.Item >Su estructura galvanizada, con el eje montado sobre el
                     chasis y sin suspensión, es resultado de la fusión entre tecnología
                      y armado que día con día tiene lugar en nuestra planta de Ciudad Sahagún,
                       Hidalgo.</ListGroup.Item>
                  </ListGroup>

                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        
          <Col>
            <Card bg="light">
              <Card.Img variant="top" src="Assets/transfer1/LINNER.jpg" />
                <Card.ImgOverlay>
                </Card.ImgOverlay>
              <Card.Body>
              <Card.Title style={style.cardTitleTwo}>LINNER</Card.Title>
                <Card.Text >
 
                  <ListGroup >
                    <ListGroup.Item ><h4>Motor</h4> Cummins ISB 6.7L Potencia 200 hp @ 2,300 RPM y Torque de 520 lb-ft.</ListGroup.Item>
                    <ListGroup.Item><h4>Sistema de frenos</h4> Doble sistema independiente y secador de aire automático.</ListGroup.Item>
                    <ListGroup.Item><h4>Número de asientos</h4> 41 asientos de plástico.</ListGroup.Item>
                    <ListGroup.Item><h4>Transmisión</h4> Fuller FSB-5406- B, manual de seis velocidades al frente y una reversa.</ListGroup.Item>
                    <ListGroup.Item><h4>Combustible</h4> Diésel. Un tanque de acero con capacidad de 204 Lts (54 Gal).</ListGroup.Item>
                  </ListGroup>


                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <br/>

        <Row>
          <Col>
            <Card bg="light">
              <Card.Img variant="top" src="Assets/transfer1/LINNER_12.jpg" />
                <Card.ImgOverlay>
                </Card.ImgOverlay>
              <Card.Body>
              <Card.Title style={style.cardTitleTwo}>LINNER 12</Card.Title>
                <Card.Text>
 
                  <ListGroup >
                    <ListGroup.Item ><h4>Motor</h4>CumminsISL 8.9L, Potencia 285 hp @ 2100 RPM y Torque de 778 lb- ft.</ListGroup.Item>
                    <ListGroup.Item><h4>Puertas</h4>2 puertas de lado derecho y opcionales de 3 puertas en configuración BRT.</ListGroup.Item>
                    <ListGroup.Item><h4>Número de asientos</h4>33 asientos de plástico.</ListGroup.Item>
                    <ListGroup.Item><h4>Transmisión</h4> Automática Allison B400R con retardador incluido.</ListGroup.Item>
                    <ListGroup.Item><h4>Combustible</h4> Diésel. Un tanque de acero con capacidad de 246 Lts (65 Gal) y un deposito para UREA de 30 Lts.</ListGroup.Item>
                  </ListGroup>


                </Card.Text>
              </Card.Body>
            </Card>        
          </Col>

          <Col>
            <Card bg="light">
              <Card.Img variant="top" src="Assets/transfer1/LINNER_2020.jpg" />
                <Card.ImgOverlay>
                </Card.ImgOverlay>
              <Card.Body>
              <Card.Title style={style.cardTitleTwo}>LINNER 2020</Card.Title>
                <Card.Text>
 
                  <ListGroup >
                    <ListGroup.Item ><h4>Motor</h4>Cummins ISB 6.7, Potencia 202 Hp @ 2,300 Rpm. Par torsional 553 Lb Ft @ 1,100 -1,800 Rpm. 6 cilindros en línea, certificación de emisiones Euro V.</ListGroup.Item>
                    <ListGroup.Item><h4>Sistema de frenos</h4> Doble sistema independiente-Leva-Tambor Arvin Meritor Q Plus y secador de aire automático. Ajustadores de freno automáticos.</ListGroup.Item>
                    <ListGroup.Item><h4>Puertas</h4>Delantera y trasera de dos hojas abatibles con mandos neumáticos e inhibidor de aceleración.</ListGroup.Item>
                    <ListGroup.Item><h4>Transmisión</h4>Eaton Fuller FSO – 6406A con Overdrive. Transmisión manual con 6 velocidades al frente y   una reversa.</ListGroup.Item>
                    <ListGroup.Item><h4>Combustible</h4>Diésel. Un tanque de acero con capacidad de 65 Gal (246 Lts.)</ListGroup.Item>
                  </ListGroup>


                </Card.Text>
              </Card.Body>
            </Card>
          </Col> 
        </Row>

        <br/>

        <Row>
          <Col>
            <Card bg="light">
              <Card.Img variant="top" src="Assets/transfer1/OUTSIDER.jpg" />
                <Card.ImgOverlay>
                </Card.ImgOverlay>
              <Card.Body>
              <Card.Title style={style.cardTitleTwo}>OUTSIDER (Falta Info)</Card.Title>
                <Card.Text>
 
                  <ListGroup >
                    <ListGroup.Item ><h4>Motor</h4> Cummins ISB 6.7L Potencia 200 hp @ 2,300 RPM y Torque de 520 lb-ft.</ListGroup.Item>
                    <ListGroup.Item><h4>Sistema de frenos</h4> doble sistema independiente y secador de aire automático.</ListGroup.Item>
                    <ListGroup.Item><h4>Número de asientos</h4> 41 asientos de plástico.</ListGroup.Item>
                    <ListGroup.Item><h4>Transmisión</h4> Fuller FSB-5406- B, manual de seis velocidades al frente y una reversa.</ListGroup.Item>
                    <ListGroup.Item><h4>Combustible</h4> diésel. Un tanque de acero con capacidad de 204 Lts (54 Gal).</ListGroup.Item>
                  </ListGroup>


                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        
          <Col>
            <Card bg="light">
              <Card.Img variant="top" src="Assets/transfer1/PICKER_8.jpg" />
                <Card.ImgOverlay>
                </Card.ImgOverlay>
              <Card.Body>
              <Card.Title style={style.cardTitleTwo}>PICKER 8 (Falta Info)</Card.Title>
                <Card.Text>
 
                  <ListGroup >
                    <ListGroup.Item ><h4>Motor</h4> Cummins ISB 6.7L Potencia 200 hp @ 2,300 RPM y Torque de 520 lb-ft.</ListGroup.Item>
                    <ListGroup.Item><h4>Sistema de frenos</h4> doble sistema independiente y secador de aire automático.</ListGroup.Item>
                    <ListGroup.Item><h4>Número de asientos</h4> 41 asientos de plástico.</ListGroup.Item>
                    <ListGroup.Item><h4>Transmisión</h4> Fuller FSB-5406- B, manual de seis velocidades al frente y una reversa.</ListGroup.Item>
                    <ListGroup.Item><h4>Combustible</h4> diésel. Un tanque de acero con capacidad de 204 Lts (54 Gal).</ListGroup.Item>
                  </ListGroup>


                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <br/>

        <Row>
          <Col>
            <Card bg="light">
              <Card.Img variant="top" src="Assets/transfer1/PICKER_11.jpg" />
                <Card.ImgOverlay>
                </Card.ImgOverlay>
              <Card.Body>
              <Card.Title style={style.cardTitleTwo}>PICKER 11 (Falta Info)</Card.Title>
                <Card.Text>
 
                  <ListGroup >
                    <ListGroup.Item ><h4>Motor</h4> Cummins ISB 6.7L Potencia 200 hp @ 2,300 RPM y Torque de 520 lb-ft.</ListGroup.Item>
                    <ListGroup.Item><h4>Sistema de frenos</h4> doble sistema independiente y secador de aire automático.</ListGroup.Item>
                    <ListGroup.Item><h4>Número de asientos</h4> 41 asientos de plástico.</ListGroup.Item>
                    <ListGroup.Item><h4>Transmisión</h4> Fuller FSB-5406- B, manual de seis velocidades al frente y una reversa.</ListGroup.Item>
                    <ListGroup.Item><h4>Combustible</h4> diésel. Un tanque de acero con capacidad de 204 Lts (54 Gal).</ListGroup.Item>
                  </ListGroup>


                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card bg="light">
              <Card.Img variant="top" src="Assets/transfer1/RIDDER_E.jpg" />
                <Card.ImgOverlay>
                </Card.ImgOverlay>
              <Card.Body>
              <Card.Title style={style.cardTitleTwo}>RIDDER E</Card.Title>
                <Card.Text>
 
                  <ListGroup >
                    <ListGroup.Item ><h4>Tracción de motor</h4> Motor eléctrico Skoda de 4 polos, tecnología IGBT. 160 kW</ListGroup.Item>
                    <ListGroup.Item><h4>Sistema de frenos</h4> Discos y sistema ABS con ATC en ambos ejes.</ListGroup.Item>
                    <ListGroup.Item><h4>Número de asientos</h4> 38 asientos de plástico.</ListGroup.Item>
                    <ListGroup.Item><h4>Sistema de respaldo</h4> Generador auxiliar a diésel Cummins QSB 4.5 Lts.</ListGroup.Item>
                    <ListGroup.Item><h4>Opcional</h4> Generador eléctrico diésel o banco de baterías.</ListGroup.Item>
                  </ListGroup>


                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <br/>

        <Row>
          <Col>
            <Card bg="light">
              <Card.Img variant="top" src="Assets/transfer1/RIDDER_G.jpg" />
                <Card.ImgOverlay>
                </Card.ImgOverlay>
              <Card.Body>
              <Card.Title style={style.cardTitleTwo}>RIDDER G (Falta Info)</Card.Title>
                <Card.Text>
 
                  <ListGroup >
                    <ListGroup.Item ><h4>Motor</h4> Cummins ISB 6.7L Potencia 200 hp @ 2,300 RPM y Torque de 520 lb-ft.</ListGroup.Item>
                    <ListGroup.Item><h4>Sistema de frenos</h4> doble sistema independiente y secador de aire automático.</ListGroup.Item>
                    <ListGroup.Item><h4>Número de asientos</h4> 41 asientos de plástico.</ListGroup.Item>
                    <ListGroup.Item><h4>Transmisión</h4> Fuller FSB-5406- B, manual de seis velocidades al frente y una reversa.</ListGroup.Item>
                    <ListGroup.Item><h4>Combustible</h4> diésel. Un tanque de acero con capacidad de 204 Lts (54 Gal).</ListGroup.Item>
                  </ListGroup>


                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card bg="light">
              <Card.Img variant="top" src="Assets/transfer1/RUNNER_2020.jpg" />
                <Card.ImgOverlay>
                </Card.ImgOverlay>
              <Card.Body>
              <Card.Title style={style.cardTitleTwo}>RUNNER 2020 (Falta Info)</Card.Title>
                <Card.Text>
 
                  <ListGroup >
                    <ListGroup.Item ><h4>Motor</h4> Cummins ISB 6.7L Potencia 200 hp @ 2,300 RPM y Torque de 520 lb-ft.</ListGroup.Item>
                    <ListGroup.Item><h4>Sistema de frenos</h4> doble sistema independiente y secador de aire automático.</ListGroup.Item>
                    <ListGroup.Item><h4>Número de asientos</h4> 41 asientos de plástico.</ListGroup.Item>
                    <ListGroup.Item><h4>Transmisión</h4> Fuller FSB-5406- B, manual de seis velocidades al frente y una reversa.</ListGroup.Item>
                    <ListGroup.Item><h4>Combustible</h4> diésel. Un tanque de acero con capacidad de 204 Lts (54 Gal).</ListGroup.Item>
                  </ListGroup>


                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <br/>

        <Row>
          <Col>
            <Card bg="light">
              <Card.Img variant="top" src="Assets/transfer1/SILUX_8_SUB.jpg" />
                <Card.ImgOverlay>
                </Card.ImgOverlay>
              <Card.Body>
              <Card.Title style={style.cardTitleTwo}>SILUX 8 SUB (Falta Info)</Card.Title>
                <Card.Text>
 
                  <ListGroup >
                    <ListGroup.Item ><h4>Motor</h4> Cummins ISB 6.7L Potencia 200 hp @ 2,300 RPM y Torque de 520 lb-ft.</ListGroup.Item>
                    <ListGroup.Item><h4>Sistema de frenos</h4> doble sistema independiente y secador de aire automático.</ListGroup.Item>
                    <ListGroup.Item><h4>Número de asientos</h4> 41 asientos de plástico.</ListGroup.Item>
                    <ListGroup.Item><h4>Transmisión</h4> Fuller FSB-5406- B, manual de seis velocidades al frente y una reversa.</ListGroup.Item>
                    <ListGroup.Item><h4>Combustible</h4> diésel. Un tanque de acero con capacidad de 204 Lts (54 Gal).</ListGroup.Item>
                  </ListGroup>


                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card bg="light">
              <Card.Img variant="top" src="Assets/transfer1/SILUX_8.jpg" />
                <Card.ImgOverlay>
                </Card.ImgOverlay>
              <Card.Body>
              <Card.Title style={style.cardTitleTwo}>SILUX 8 (Falta Info)</Card.Title>
                <Card.Text>
 
                  <ListGroup >
                    <ListGroup.Item ><h4>Motor</h4> Cummins ISB 6.7L Potencia 200 hp @ 2,300 RPM y Torque de 520 lb-ft.</ListGroup.Item>
                    <ListGroup.Item><h4>Sistema de frenos</h4> doble sistema independiente y secador de aire automático.</ListGroup.Item>
                    <ListGroup.Item><h4>Número de asientos</h4> 41 asientos de plástico.</ListGroup.Item>
                    <ListGroup.Item><h4>Transmisión</h4> Fuller FSB-5406- B, manual de seis velocidades al frente y una reversa.</ListGroup.Item>
                    <ListGroup.Item><h4>Combustible</h4> diésel. Un tanque de acero con capacidad de 204 Lts (54 Gal).</ListGroup.Item>
                  </ListGroup>


                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>


    </div>
  );
}
const style = {
  
  title: {
      textAlign: 'center',
      padding: '2.2em 0em 0em 0em',
      fontSize: '50px'
    },
    container: {
      margin: 'auto',
      padding: '1em'
    },
    card: {
 
    },
    cardTitle: {
      textAlign: 'justify',
      letterSpacing: '0.2em',
      fontWeight: '900',
    },
    cardTitleTwo: {
      fontSize: '2em',
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
      backgroundColor: ''
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

export default Vehiculos;