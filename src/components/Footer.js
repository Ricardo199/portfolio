/**
 * Footer.js
 * This component renders the footer section of the portfolio site.
 * 
 * Author: Ricardo Burgos
 * Date: 2024
 */

import React from "react";
import { Container } from "react-bootstrap";

// Footer component definition
function Footer() {
    return (
        <footer>
            <Container fluid className="bg-dark text-white text-center p-3">
                {/* Footer content */}
                <p>
                    <a href="https://github.com/Ricardo199">Ricardo Burgos</a> 2024
                </p>
            </Container>
        </footer>
    );
}

export default Footer;