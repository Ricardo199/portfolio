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
                </Container>
            </header>
        </div>
    </>
}

export default Projects;