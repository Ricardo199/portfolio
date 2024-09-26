/**
 * Services.js
 * 
 * This file contains the Services component which displays a list of projects
 * and services offered. It uses React Bootstrap for styling and layout.
 */

import { Container, Card, Row, Col } from 'react-bootstrap';

// Services component definition
function Services() {
    return (
        <>
            {/* Main container with dark background and light text */}
            <div className="App bg-dark text-light">
                <header className="App-header">
                    <Container>
                        {/* Page title */}
                        <h1 className="text-center">Projects</h1>
                        <p>Here are some of the projects I have worked on:</p>
                        
                        {/* Row to hold the project cards */}
                        <Row className="justify-content-center">
                            {/* First project card */}
                            <Col md={4} className="d-flex justify-content-center">
                                <Card style={{ width: '18rem' }} className="m-3">
                                    <Card.Img variant="top" src={"https://www.reachfirst.com/wp-content/uploads/2018/08/Web-Development.jpg"} />
                                    <Card.Body>
                                        <Card.Title>Web development</Card.Title>
                                        <Card.Text>
                                            Whether it is in MERN or JSF, I can make a website for you. I have experience with both and can create a website that fits your needs.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            
                            {/* Second project card */}
                            <Col md={4} className="d-flex justify-content-center">
                                <Card style={{ width: '18rem' }} className="m-3">
                                    <Card.Img variant="top" src={"https://scot-comp.co.uk/wp-content/uploads/sites/8/2023/09/Comp-Main-1.jpg"} />
                                    <Card.Body>
                                        <Card.Title>Computer Maintenance</Card.Title>
                                        <Card.Text>
                                            I can help you with your computer problems, from hardware to software. I can assist you with most of your computer needs.
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

export default Services;