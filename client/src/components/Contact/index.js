import React from 'react';
import Button from 'react-bootstrap/Button';
import { MdEmail } from 'react-icons/md';
import API from '../../utils/API';
import './style.css';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameInput: "",
            emailInput: "",
            subjectInput: "",
            messageInput: "",
            data: {},
            emailSent: false
        }
    }

    // handle name input element
    handleNameInputChange = event => {
        event.preventDefault();
        const value = event.target.value;
        this.setState({
            nameInput: value
        })
        console.log(this.state.nameInput);
    }
    // handle email input element
    handleEmailInputChange = event => {
        event.preventDefault();
        const value = event.target.value;
        this.setState({
            emailInput: value
        })
        console.log(this.state.emailInput);
    }
    // handle subject input element
    handleSubjectInputChange = event => {
        event.preventDefault();
        const value = event.target.value;
        this.setState({
            subjectInput: value
        })
        console.log(this.state.subjectInput);
    }
    // handle message input element
    handleMessageInputChange = event => {
        event.preventDefault();
        const value = event.target.value;
        this.setState({
            messageInput: value
        })
        console.log(this.state.messageInput);
    }
    // handle submit button element
    // add in error handling for blank input fields
    handleSubmit = (event) => {
        event.preventDefault();
        let tempDataObj = {};
        tempDataObj = {
            name: this.state.nameInput,
            email: this.state.emailInput,
            subject: this.state.subjectInput,
            message: this.state.messageInput
        }

        this.setState({ data: tempDataObj })
        console.log(this.state.data);
    }

    sendEmailAddress = (event) => {
        event.preventDefault();
        // let emailData = {};
        let emailData = {
            name: this.state.nameInput,
            email: this.state.emailInput,
            subject: this.state.subjectInput,
            message: this.state.messageInput
        }
        // this.setState({ data: emailData })
        API.sendEmail(emailData)
            .then(res => {
                // console.log(res);
                this.setState({ emailSent: true });
                // console.log(res.json());
            })
            .catch(err => console.log(err));
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
                                    <label>
                                        Name <span className="required">*</span>
                                    </label>
                                </div>
                                <input 
                                    value={this.state.nameInput}
                                    onChange={this.handleNameInputChange}
                                    type="text" 
                                    id="contactName" 
                                    name="nameInput" />
                            </div>
                            <div>
                                <div className="form-label">
                                    <label>
                                        Email <span className="required">*</span>
                                    </label>
                                </div>
                                <input 
                                    value={this.state.emailInput}
                                    onChange={this.handleEmailInputChange}
                                    type="text" 
                                    id="emailField" 
                                    name="emailInput" />
                            </div>
                            <div>
                                <div className="form-label">
                                    <label>
                                        Subject <span className=""></span>
                                    </label>
                                </div>
                                <input 
                                    value={this.state.subjectInput}
                                    onChange={this.handleSubjectInputChange}
                                    type="text"
                                    id="subjectField"
                                    name="subjectInput" />
                            </div>
                            <div>
                                <div className="form-label">
                                    <label>
                                        Message <span className="required">*</span>
                                    </label>
                                </div>
                                <textarea 
                                    value={this.state.messageInput}
                                    onChange={this.handleMessageInputChange}
                                    type="text"
                                    id="messageField"
                                    name="messageInput" />
                            </div>
                            <Button
                                onClick={(event) => this.sendEmailAddress(event)} 
                                className="email-btn" 
                                variant="primary" 
                                size="md">
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
