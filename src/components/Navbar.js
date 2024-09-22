import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import placeholderImage from '../Untitled.png';
import { Outlet } from 'react-router-dom';

function CustomNavbar() {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        <Navbar.Brand href="#home">Brand</Navbar.Brand>
                        <img src={placeholderImage} width="50" height="50" className="d-inline-block align-top ms-2" alt="placeholder" style={{ borderRadius: '50%' }} />
                    </div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <Nav.Link href='/Home'>Home </Nav.Link>
                            <Nav.Link href='/about'>About Me</Nav.Link>
                            <NavDropdown title="Projects" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </>
    );
}

export default CustomNavbar;