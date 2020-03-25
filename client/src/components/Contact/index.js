import React from 'react';
import Button from 'react-bootstrap/Button';
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
                                <textarea type="text" id="messageField" name="messageField" />
                            </div>
                            <Button className="email-btn" variant="primary" size="md">
                                Submit
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;
