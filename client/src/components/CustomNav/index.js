import React from 'react';
import './style.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-scroll";

const CustomNav = () => {

    return (
        <div id="nav-wrap">
        <Navbar collapseOnSelect expand="md" bg="blue" variant="dark">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mx-auto">
                    
                    <Nav.Link>
                        <Link
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration= {800}
                        >
                        Home
                        </Link>
                        
                        </Nav.Link>

                    <Nav.Link>
                        <Link
                            activeClass="active"
                            to="aboutMeContainer"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration= {800}
                        >
                            About
                        </Link>    
                        
                    </Nav.Link>
                    <Nav.Link href="#work">Work</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>

                    
                </Nav>

            </Navbar.Collapse>
        </Navbar>
        </div>
    )
}

export default CustomNav;