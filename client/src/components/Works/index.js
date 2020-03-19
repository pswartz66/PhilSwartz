import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import portfolio from '../../assets/img/port-img.png';
import './style.css';

const Works = () => {

    return (
        <div className="worksContainer">
            <Row>
                <Col>
                    <div className="worksHeader">
                        <h5>Check out some of my work.</h5>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <hr className="worksDivider"></hr>
                </Col>
            </Row>
            <div className="subContainer">
                <div className="workCard">
                    <img className="card-Images" src={portfolio} alt="card-one"></img>
                    <div className="overlay">test input</div>
                </div>
                <div className="workCard">

                </div>
                <div className="workCard">

                </div>
            </div>

        </div>
    )

}

export default Works;