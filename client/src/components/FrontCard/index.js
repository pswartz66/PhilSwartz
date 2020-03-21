import React from 'react';
import './style.css';

const FrontCard = (props) => {


    return (
        <div onClick={props.onClick} className="front-items">
            <h6>ReactJS</h6>
            <h3>My Portfolio</h3>
            <p>Single page application showcasing my work and resume.</p>
            <a className="front-viewDetails" href="https://github.com/pswartz66/PhilSwartz">VIEW DETAILS</a>
        </div>
    )
}


export default FrontCard;