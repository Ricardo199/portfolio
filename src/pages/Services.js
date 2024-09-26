import { Container, Card, Row, Col } from 'react-bootstrap';

function Services() {
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
                                        <Card.Title>Web development</Card.Title>
                                        <Card.Text>
                                            Weather it is in mern or jsf i can make a website for you, i have experience with both and can make a website that fits your needs
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4} className="d-flex justify-content-center">
                                <Card style={{ width: '18rem' }} className="m-3">
                                    <Card.Img variant="top" src={"https://scot-comp.co.uk/wp-content/uploads/sites/8/2023/09/Comp-Main-1.jpg"} />
                                    <Card.Body>
                                        <Card.Title>Computer Maintenance</Card.Title>
                                        <Card.Text>
                                            I can help you with your computer problems, from hardware to software i can help you with most of your computer needs
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