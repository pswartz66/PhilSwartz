import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MdEmail } from 'react-icons/md';
import './style.css';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mystring: ""
        }
    }

    render() {
        return ( 
            <div className="contactContainer">
                <Row>
                    <Col className="col-2">
                        <div className="email-icon">
                            <MdEmail size={64}/>
                        </div>
                    </Col>
                    <Col className="col-10">
                        {/* <div className="email-text-center"> */}
                            Please fill out the form below to get in touch!
                        {/* </div> */}
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Contact;
