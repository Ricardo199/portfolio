import React from 'react';
import { Container, Card } from 'react-bootstrap';

function Projects() {
    <>
        <div className="App bg-dark text-light">
            <header className="App-header">
                <Container>
                    <h1 className="text-center">Projects</h1>
                    <p>Here are some of the projects I have worked on:</p>
                    <div className="d-flex justify-content-center">
                        <Card style={{ width: '18rem' }} className="m-3">
                            <Card.Img variant="top" src={"https://server2client.com/images/servletslogo.webp"} />
                            <Card.Body>
                                <Card.Title>Project 1</Card.Title>
                                <Card.Text>
                                    Java servlet app for managing an employee and their department to show off the functionality of the
                                    java servlet library, because of certain limitations i am not able to run it but the code is here and functional
                                    <a href="https://github.com/Ricardo199/sis16emp/tree/main">
                                        Github link
                                    </a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="d-flex justify-content-center">
                        <Card style={{ width: '18rem' }} className="m-3">
                            <Card.Img variant="top" src={"/portfolio/public/Screenshot 2024-09-25 230026.png"} />
                            <Card.Body>
                                <Card.Title>Project 2</Card.Title>
                                <Card.Text>
                                    Just a simple image carrousel using ajax, it requests images from a server and receives them along with some metadata
                                    <a href="https://github.com/Ricardo199/ajax-homework">Github LInk</a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="d-flex justify-content-center">
                        <Card style={{ width: '18rem' }} className="m-3">
                            <Card.Img variant="top" src={"/portfolio/public/Screenshot 2024-09-25 230743.png"} />
                            <Card.Body>
                                <Card.Title>Project 3</Card.Title>
                                <Card.Text>
                                    Just a simple canvas game i threw together for my js class, the objective is to click the alien in space before the time runs out
                                    <a href="https://github.com/Ricardo199/canvasgame">Github LInk</a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Container>
            </header>
        </div>
    </>
}

export default Projects;