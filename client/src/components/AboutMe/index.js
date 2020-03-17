import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';
import profileImg from '../../assets/img/ProfilePicture.jpg';

const AboutMe = (props) => {
    return (
        <div className="aboutMeContainer">
            <div className="left-pane">
                <img className="prof-img" alt="blank" src={profileImg}>
                </img>
            </div>

            <div className="right-pane">
                <h2 className="aboutMeTitle">About Me</h2>
                    <p>AboutMe section goes here</p>
                </div>
        </div>
    )
}

export default AboutMe;