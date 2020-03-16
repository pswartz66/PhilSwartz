import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';
import profileImg from '../../assets/img/ProfilePicture.jpg';

const AboutMe = (props) => {
    return (
        <div className="aboutMeContainer">
            <Row>
                <Col className="col-sm-4 col-md-4 col-lg-4 col-xl-4">
                    <div className="left-pane">
                        <img className="prof-img" alt="blank" src={profileImg}>
                        </img>
                    </div>
                </Col>
                <Col className="col-sm-8 col-md-8 col-lg-8 col-xl-8">
                    <div className="right-pane">
                        AboutMe section goes here
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default AboutMe;