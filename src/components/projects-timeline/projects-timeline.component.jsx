import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

// projects
import L_ReactToDoList from "../../assets/img/projects/React_ToDo_List.webp";
import L_MernTipCalc from "../../assets/img/projects/mern_tip_calc.webp";
import L_GetGitHubInfo from "../../assets/img/projects/get_github_info.webp";
import L_SmartBrain from "../../assets/img/projects/brain.webp";
import L_RoboFriends from "../../assets/img/projects/Robofriends.webp";
import L_ProductHuntClone from "../../assets/img/projects/product_hunt_clone.webp";
import L_PortfolioUsingDjango from "../../assets/img/projects/portfolioUsingDjango.webp";
import L_Tiomanga from "../../assets/img/projects/tiomanga.webp";
import L_Vierbeinig from "../../assets/img/projects/vierbeinig.webp";
import L_Mapacovid from "../../assets/img/projects/mapacovid.webp";
import L_Easyhotel from "../../assets/img/projects/easyhotel.webp";


import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// skills
import L_REACT from "../../assets/img/skills/react.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";
import L_POSTGRESQL from "../../assets/img/skills/postgresql.svg";
import L_MONGODB from "../../assets/img/skills/mongodb.svg";
import Image from "react-bootstrap/Image";
import L_REDUX from "../../assets/img/skills/redux.svg";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
import L_DJANGO from "../../assets/img/skills/django.svg";
import L_DIGITAL_OCEAN from "../../assets/img/skills/digital-ocean.svg";
import L_GIT from "../../assets/img/skills/github-api.svg";
import L_MATERIALUI from "../../assets/img/skills/material-ui-1.svg";
import L_PHP from "../../assets/img/skills/php.svg";
import L_AWS from "../../assets/img/skills/aws.svg";
import L_LARAVEL from "../../assets/img/skills/laravel-1.svg";
import L_ARDUINO from "../../assets/img/skills/arduino.svg";
import L_PYTHON from "../../assets/img/skills/python.svg";
import L_PYTHONANYWHERE from "../../assets/img/skills/pythonanywhere.svg";
import L_ANDROID from "../../assets/img/skills/android.svg";
import L_SWIFT from "../../assets/img/skills/swift-15.svg";
import L_FIREBASE from "../../assets/img/skills/firebase-1.svg";
import L_IOS from "../../assets/img/skills/ios-2.svg";
import L_REACTNATIVE from "../../assets/img/skills/react-native-firebase-1.svg";
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";




import "./projects-timeline.styles.css";

const TimeLine = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROYECTOS</h1>
      <Timeline>
        <Events>
        {/* Project: Mapa Covid-19 */}
          <ImageEvent
            date="20/07/2020"
            className="text-center"
            text="Mapa Covid-19"
            src={L_Mapacovid}
            alt="Mapa Covid-19"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      Detalles
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Descripción:</strong> App móvil que muestra las zonas calientes de
                        infectados por covid en un mapa.
                        <hr />
                        <strong>Características:</strong>
                        <ul className="list-styles pt-1">
                          <li>Autenticación de usuarios mediante integración con Firebase</li>
                          <li>Mapa para visualizar zonas calientes de infectados por covid</li>
                          <li>Agregar reportes nuevos de zonas calientes</li>
                          <li>Listar reportes de una zona determinada del mapa</li>
                        </ul>
                        <hr />
                        <strong>Tecnologías usadas:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_IOS}
                                alt="IOS"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              IOS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_SWIFT}
                                alt="Swift"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Swift
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_FIREBASE}
                                alt="Firebase"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Firebase
                            </span>
                          </li>
                        </ul>
                        <hr />
                        <em>
                        </em>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                
                <UrlButton
                  href="https://gitlab.com/tecsup1/programacion-en-moviles-avanzado/pma-proyectofinal"
                  target="_blank"
                >
                  Repositorio
                </UrlButton>
                
              </div>
            </div>
          </ImageEvent>

          {/* Project: EasyHotel */}

          <ImageEvent
            date="27/06/2020"
            className="text-center"
            text="EasyHotel"
            src={L_Easyhotel}
            alt="EasyHotel"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      Detalles
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Descripción:</strong> App móvil que permite reservar
                         habitaciones de hoteles y servicio al cuarto dependiendo del Hotel.
                        <hr />
                        <strong>Características:</strong>
                        <ul className="list-styles pt-1">
                          <li>Autenticación mediante la integración con Firebase</li>
                          <li>Listar hoteles con sus detalles de cada uno</li>
                          <li>Reservar habitación de un hotel</li>
                          <li>Pedir comida o bebidas al cuarto dependiendo del hotel</li>
                          <li>Uso de Redux</li>
                        </ul>
                        <hr />
                        <strong>Tecnologías usadas:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACTNATIVE}
                                alt="ReactNative"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              React Native
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_FIREBASE}
                                alt="Firebase"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Firebase
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REDUX}
                                alt="Redux"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Redux
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVASCRIPT}
                                alt="Javascript"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Javascript
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://gitlab.com/tecsup1/aplicaciones-moviles-multiplataforma/dam-exam4"
                  target="_blank"
                >
                  Repositorio
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Vierbeinig */}

          <ImageEvent
            date="12/12/2019"
            className="text-center"
            text="Vierbeinig"
            src={L_Vierbeinig}
            alt="Vierbeinig"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      Detalles
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Descripción:</strong> Applicación móvil diseñada para 
                        poder controlar una araña robot que mide la temperatura.
                        <hr />
                        <strong>Características:</strong>
                        <ul className="list-styles pt-1">
                          <li>Controlar un prototipo de araña con partes impresas en 3D</li>
                          <li>Obtener datos en tiempo real de medición de la temperatura y humedad</li>
                          <li>Autenticación mediante OAUTH integrada con Django</li>
                          <li>Generacón de minireportes de temperatura y humedad estableciendo un periodo de tiempo </li>
                          <li>Hosteado usando PythonAnyWhere </li>
                        </ul>
                        <hr />
                        <strong>Tecnologías usadas:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_ARDUINO}
                                alt="Arduino"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Arduino
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_DJANGO}
                                alt="Django"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Django
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_PYTHON}
                                alt="Bootstrap 4"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Python
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_PYTHONANYWHERE}
                                alt="Django"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              PythonAnyWhere
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_ANDROID}
                                alt="Android"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Android
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/gtorres777/ADAs-Django"
                  target="_blank"
                >
                  Repositorio
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Tiomanga */}
          <ImageEvent
            date="17/06/2019"
            className="text-center"
            text="TioManga"
            src={L_Tiomanga}
            alt="Tiomanga"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      Detalles
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Descripción:</strong> Aplicación web para visualizar mangas 
                        y poder comprar productos relacionados a los mangas.
                        <hr />
                        <strong>Funcionalidades:</strong>
                        <ul className="list-styles pt-1">
                          <li>Visualizar Mangas</li>
                          <li>Mangas clasificados por categorias</li>
                          <li>Dashboard para la administración de la aplicación web</li>
                          <li>Pasarela de pago para la tienda implementada</li>
                          <li>Facilidades para el usuario para gestionar sus preferencias de mangas</li>
                          <li>Sistema de autenticación</li>
                          <li>
                            Hosteado usando AWS 
                          </li>
                        </ul>
                        <hr />
                        <strong>Tecnologías usadas:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVASCRIPT}
                                alt="Javascript"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Javascript
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP4}
                                alt="Bootstrap 4"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Bootstrap 4
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_LARAVEL}
                                alt="Laravel"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Laravel
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_PHP}
                                alt="PHP"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Laravel
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MONGODB}
                                alt="MONGODB"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              MongoDB
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_AWS}
                                alt="AWS"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              AWS
                            </span>
                          </li>
                        </ul>
                        <hr />
                        <em>
                          
                        </em>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton href="https://github.com/gtorres777/DAI_EliteManga" target="_blank">
                  Repositorio
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
        </Events>
      </Timeline>
    </div>
  );
};

export default TimeLine;
