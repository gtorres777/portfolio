import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.styles.css";
import Profile from "../../assets/img/profile/profile2.webp";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">ACERCA DE MI</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                Hola! Mi nombre es <strong>&nbsp;Gustavo Adolfo Torres Díaz</strong>
                <br />Diseñador de software y bachiller en Ingenieria Biotecnológica, naci y creci en Arequipa. Soy un desarrollador web Full Stack y Móvil responsable, perseverante , 
                de trabajo en equipo, comprometido y creativo.
                <br />
                En 2016, complete satisfactoriamente mi carrera de Ingenieria Biotecnológica y bachillerarme al año siguiente. 
                <br />
                Y en 2018 empece mis estudios en Tecsup en la carrera de Diseño de Software e Integración de Sistemas, la cual estoy por culminar exitosamente.
                <br />
                Me gustaría unirme a un equipo de desarrollo de software en el que pueda poner en práctica los conocimientos adquiridos de gestión y programación de software durante mis años de formación en Tecsup, que contribuya de manera significativa a los objetivos de su organización y que también me permita poder crecer en experiencia y profesionalmente. . 
                <br />Me apasionan las nuevas tecnologías que salen dia a dia, y poder estar a la vanguardia con estas.
                <br /> <br />
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Hablemos
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://drive.google.com/file/d/179g_19f3Cd6UYGbQL1MgxxLFGWsE0O9J/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        Curriculum Vitae
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/gtorres777" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/gustavo-torres-díaz-4948361a1" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
