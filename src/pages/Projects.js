import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import p1 from '../images/Screenshot 2024-09-25 230026.png';
import p2 from '../images/Screenshot 2024-09-25 230743.png';

function Projects() {
    return (
    <>
        <div className="App bg-dark text-light">
            <header className="App-header">
                <Container>
                    <h1 className="text-center">Projects</h1>
                    <p>Here are some of the projects I have worked on:</p>
                    <Row className="justify-content-center">
                        <Col md={4} className="d-flex justify-content-center">
                            <Card style={{ width: '18rem' }} className="m-3">
                                <Card.Img variant="top" src={"https://server2client.com/images/servletslogo.webp"} />
                                <Card.Body>
                                    <Card.Title>Project 1</Card.Title>
                                    <Card.Text>
                                        Java servlet app for managing an employee and their department to show off the functionality of the
                                        java servlet library, because of certain limitations i am not able to run it but the code is here and functional
                                    </Card.Text>
                                    <Card.Text>
                                        <a href={p1}>Github link</a>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="d-flex justify-content-center">
                            <Card style={{ width: '18rem' }} className="m-3">
                                <Card.Img variant="top" src={p1} />
                                <Card.Body>
                                    <Card.Title>Project 2</Card.Title>
                                    <Card.Text>
                                        Just a simple image carrousel using ajax, it requests images from a server and receives them along with some metadata
                                    </Card.Text>
                                    <Card.Text>
                                        <a href={p2}>Github Link</a>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="d-flex justify-content-center">
                            <Card style={{ width: '18rem' }} className="m-3">
                                <Card.Img variant="top" src={p2} />
                                <Card.Body>
                                    <Card.Title>Project 3</Card.Title>
                                    <Card.Text>
                                        Just a simple canvas game i threw together for my js class, the objective is to click the alien in space before the time runs out
                                    </Card.Text>
                                    <Card.Text>
                                        <a href="https://github.com/Ricardo199/canvasgame">Github Link</a>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </header>
        </div>
    </>
    );
}

export default Projects;