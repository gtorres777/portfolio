import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_CIIM from "../../assets/img/experience/ciim.svg";
import L_CONNECTTIX from "../../assets/img/experience//connecttix.svg";
import Tilt from "react-tilt";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCIA</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={L_CONNECTTIX} alt="Accenture logo" />
              </Card.Header>
              
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Grupo ConnectTix SAC - Jornada parcial</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Pasante</strong>
                    <br />
                    <strong>Tecnologías:</strong> Django, Python, PostgresSQL, Mercurial
                    <br />
                    <strong>Duración:</strong> Noviembre 2019 – Febrero 2020
                    <br/>
                    <strong> Descripción </strong>
                    <ul className="text-center">
                      <strong>Desarrollo Backend de un sistema para el control en el transporte de petróleo</strong>
                      {/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}

                    </ul>
                    
                    
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>

      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={L_CIIM} alt="Accenture logo" />
              </Card.Header>
              
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Centro de Investigación de Ingeniería Molecular – CIIM – Jornada parcial</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Practicante</strong>
                    <br />
                    <strong>Tecnologías:</strong> BioPython, Bash - Shell Scripting, Dambe, MrBayes
                    <br />
                    <strong>Duración:</strong> Agosto 2016 – Enero 2017
                    <br/>
                    <strong> Descripción </strong>
                    <ul className="text-center">
                      <strong>Diseño de árboles filogenéticos usando MrBayes</strong>
                      {/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}

                    </ul>
                    
                    
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;
