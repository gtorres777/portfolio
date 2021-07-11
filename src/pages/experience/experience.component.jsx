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
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={L_CONNECTTIX} alt="Accenture logo" />
              </Card.Header>
              
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Grupo ConnectTix SAC - Part time</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Web App Developer</strong>
                    <br />
                    <strong>Technologies:</strong> Django, Python, PostgresSQL, Mercurial
                    <br />
                    <strong>Duration:</strong> November 2019 – February 2020
                    <br/>
                    <strong> Description </strong>
                    <ul className="text-center">
                      <strong>Backend development of a system for the control of oil transportation</strong>
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
                  <Card.Title className="text-center">Centro de Investigación de Ingeniería Molecular – CIIM – Part time</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Internship</strong>
                    <br />
                    <strong>Technologies:</strong> BioPython, Bash - Shell Scripting, Dambe, MrBayes
                    <br />
                    <strong>Duration:</strong> August 2016 – January 2017
                    <br/>
                    <strong> Description </strong>
                    <ul className="text-center">
                      <strong>Phylogenetic tree desing using MrBayes </strong>
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
