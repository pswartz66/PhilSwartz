import React from 'react';
import './style.css';

const FrontCardPF = (props) => {


    return (
        <div onClick={props.onClick} className="front-items-pf">
            <h6>ReactJS</h6>
            <h3>My Portfolio</h3>
            <p>Single page application showcasing my work and resume.</p>
            <a className="front-viewDetails-pf" href="https://github.com/pswartz66/PhilSwartz">VIEW DETAILS</a>
        </div>
    )
}


export default FrontCardPF;