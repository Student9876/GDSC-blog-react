import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Component1 from '../images/Component 3.svg'


function HeadingComponents() {
    return <div className="headingDiv">
        <Container>
            <Row>
                <Col xs={6} sm={6} md={4} lg={2}><div className="fieldDiv shakethis">
                    <center>
                        <img src={Component1} alt="stackIcon" />
                        <p>Web Dev</p>
                    </center>
                </div>
                </Col>
                <Col xs={6} sm={6} md={4} lg={2}><div className="fieldDiv shakethis">
                    <center>
                        <img src={Component1} alt="stackIcon" />
                        <p>App Dev</p>
                    </center>
                </div>
                </Col>
                <Col xs={6} sm={6} md={4} lg={2}><div className="fieldDiv shakethis">
                    <center>
                        <img src={Component1} alt="stackIcon" />
                        <p>Cloud</p>
                    </center>
                </div>
                </Col>
                <Col xs={6} sm={6} md={4} lg={2}><div className="fieldDiv shakethis">
                    <center>
                        <img src={Component1} alt="stackIcon" />
                        <p>Data Science</p>
                    </center>
                </div>
                </Col>
                <Col xs={6} sm={6} md={4} lg={2}><div className="fieldDiv shakethis">
                    <center>
                        <img src={Component1} alt="stackIcon" />
                        <p>Ml/AI</p>
                    </center>
                </div>
                </Col>
                <Col xs={6} sm={6} md={4} lg={2}><div className="fieldDiv shakethis">
                    <center>
                        <img src={Component1} alt="stackIcon" />
                        <p>Web 3.0</p>
                    </center>
                </div>
                </Col>
            </Row>
        </Container>
    </div>
}

export default HeadingComponents;