import React from 'react';
import { FaAngleUp } from 'react-icons/fa';
import { Link } from "react-scroll";
import './style.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="top-arrow">
                <Link
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={1000}
                    className="up-arrow"
                >
                    <FaAngleUp color={'rgb(0, 0, 0)'} size={28} />
                </Link>
            </div>
            <div className="footer-text">
                @ Copyright 2020 Phil Swartz
            </div>
        </div>
    )
}

export default Footer;
