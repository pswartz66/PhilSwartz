import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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

        </div>
    )

}

export default Works;