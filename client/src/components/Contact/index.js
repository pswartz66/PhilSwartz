import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MdEmail } from 'react-icons/md';
import './style.css';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pName: ""
        }
    }

    render() {
        return (
            <div className="contactContainer">
                <div className="contact-head">
                    <MdEmail size={80} />

                    <div className="sub-contact-container">

                        <form className="form-center">
                            <div>
                                <div className="form-label">
                                    <label for="">
                                        Name <span className="required">*</span>
                                    </label>
                                </div>
                                <input type="text" id="contactName" name="contactName" />
                            </div>
                            <div>
                                <div className="form-label">
                                    <label for="">
                                        Email <span className="required">*</span>
                                    </label>
                                </div>
                                <input type="text" id="emailField" name="emailField" />
                            </div>
                            <div>
                                <div className="form-label">
                                    <label for="">
                                        Subject <span className=""></span>
                                    </label>
                                </div>
                                <input type="text" id="subjectField" name="subjectField" />
                            </div>
                            <div>
                                <div className="form-label">
                                    <label for="">
                                        Message <span className="required">*</span>
                                    </label>
                                </div>
                                <input type="text" id="messageField" name="messageField" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;
