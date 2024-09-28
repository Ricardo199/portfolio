/**
 * Navbar.js
 * 
 * This component defines a custom navigation bar using React-Bootstrap components.
 * It includes links to different sections of the portfolio site and a dropdown menu.
 * 
 * Author: Ricardo Burgos
 * Date: [Insert Date]
 */

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import placeholderImage from '../Untitled.png';
import { Outlet } from 'react-router-dom';

function CustomNavbar() {
    return (
        <>
            {/* Navbar component with dark theme and expand on large screens */}
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        {/* Brand name with a link to the Home page */}
                        <Navbar.Brand href="/">Ricardo Burgos</Navbar.Brand>
                        {/* Placeholder image next to the brand name */}
                        <img src={placeholderImage} width="50" height="50" className="d-inline-block align-top ms-2" alt="placeholder" style={{ borderRadius: '50%' }} />
                    </div>
                    {/* Toggle button for collapsing the navbar on small screens */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            {/* Navigation links */}
                            <Nav.Link href='/'>Home</Nav.Link>
                            <Nav.Link href='/About'>About Me</Nav.Link>
                            {/* Dropdown menu for additional links */}
                            <NavDropdown title="What I offer" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/Projects">Projects</NavDropdown.Item>
                                <NavDropdown.Item href="/Services">Services</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* Outlet component to render matched child routes */}
            <Outlet />
        </>
    );
}

export default CustomNavbar;