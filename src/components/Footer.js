import React from "react";
import {Container} from "react-bootstrap";

function Footer() {
    return (
        <footer>
            <Container fluid className="bg-dark text-white text-center p-3">
            <p>
                <a href="https://github.com/Ricardo199">Ricardo Burgos</a> 2024
            </p>
            </Container>
        </footer>
    );
}

export default Footer;