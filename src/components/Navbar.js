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
                        <Navbar.Brand href="#home">Ricardo Burgos</Navbar.Brand>
                        <img src={placeholderImage} width="50" height="50" className="d-inline-block align-top ms-2" alt="placeholder" style={{ borderRadius: '50%' }} />
                    </div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <Nav.Link href='/Home'>Home </Nav.Link>
                            <Nav.Link href='/about'>About Me</Nav.Link>
                            <NavDropdown title="What I offer" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/Projects">Projects</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Services</NavDropdown.Item>
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