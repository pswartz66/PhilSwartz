import React from 'react';
import './style.css';

const FrontCardBM = (props) => {


    return (
        <div onClick={props.onClick} className="front-items-bm">
            <h6>ReactJS</h6>
            <h3>My Portfolio</h3>
            <p>Single page application showcasing my work and resume.</p>
            <a className="front-viewDetails-bm" href="https://github.com/pswartz66/PhilSwartz">VIEW DETAILS</a>
        </div>
    )
}


export default FrontCardBM;