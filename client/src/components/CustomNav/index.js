import React from 'react';
import './style.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-scroll";

class CustomNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navClicked: false
        }
    }

    hideNav = () => {
        // event.preventDefault();
        console.log('clicked nav');
        this.setState({
            navClicked: true
        })
        return true;
    }

    render() {
        return (
            <div id="nav-wrap">
                <Navbar collapseOnSelect expand="md" bg="blue" variant="dark">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse data-state="hidden" id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            {/* <Nav.Link > */}
                                <Link
                                    onClick={this.hideNav}
                                    activeClass="active"
                                    to="home"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={1000}
                                >
                                    Home
                        </Link>

                            {/* </Nav.Link> */}

                            {/* <Nav.Link> */}
                                <Link
                                    activeClass="active"
                                    to="aboutMeContainer"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={1000}
                                >
                                    About
                        </Link>

                            {/* </Nav.Link> */}
                            {/* <Nav.Link> */}
                                <Link
                                    activeClass="active"
                                    to="worksContainer"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={1000}
                                >
                                    Works
                    </Link>
                            {/* </Nav.Link> */}
                            {/* <Nav.Link> */}
                                <Link
                                    activeClass="active"
                                    to="contactContainer"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={1000}
                                >
                                    Contact
                        </Link>
                            {/* </Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default CustomNav;