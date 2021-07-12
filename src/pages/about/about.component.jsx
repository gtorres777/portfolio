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
        <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                Hi there! I am <strong>&nbsp;Gustavo Torres Díaz.</strong>
                A passionate programmer and biotechnologist, born and brought up in Perú.
                I am a Full stack Web and Mobile Developer, responsible, perseverant, easy to work
                in team, committed and creative.
                <br />
                In 2017, I successfully completed my Biotechnological Engineering career.
                <br />
                And in 2020 I sucessfully finished my career in Software Design and Systems Integration.
                <br />
                I would like to join a software development team where I can continue to learn and grow professionally
                applying all the knowledge acquired in management, biotechnology and software development during my
                formative years.
                <br />I am passionate about the new technologies that come out day by day as Machine Learning and Bioinformatics,
                and being able to be at the forefront with these.
                <br /> <br />
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://getonbrd-prod.s3.amazonaws.com/uploads/cv/370722847c77d0e68f36905a4d38745f/Torres_Diaz_Gustavo.pdf?X-Amz-Expires=86400&X-Amz-Date=20210712T050003Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJT5MYUSOEN4SITVA%2F20210712%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-SignedHeaders=host&X-Amz-Signature=75c3563f4c2281d5d2f96c9c33e9acd60c58831c4912eea870e87b864dc4c8e8" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My Resume (CV)
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
