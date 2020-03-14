import React from 'react';
import './style.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

const CustomNav = () => {

    // this.state = ({ height: '500px' });


    return (
        <div id="nav-wrap">
        <Navbar collapseOnSelect expand="md" bg="blue" variant="dark">
            {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mx-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#work">Work</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>

                    {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Home</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">About</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Work</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown> */}
                </Nav>
                {/* <Nav>
                    <Nav.Link href="#deets">More deets</Nav.Link>
                    <Nav.Link eventKey={1} href="#memes">
                        Dank memes
                        </Nav.Link>
                </Nav> */}
            </Navbar.Collapse>
        </Navbar>
        </div>
    )
}

export default CustomNav;