import React from 'react';
import { FaDownload } from 'react-icons/fa';
import './style.css';
import profileImg from '../../assets/img/ProfilePicture.jpg';
import resume from '../../assets/resume/Phillip Swartz - Resume.docx'

const AboutMe = (props) => {
    return (
        <div className="aboutMeContainer">
            <div className="left-pane">
                <img className="prof-img" alt="blank" src={profileImg}>
                </img>
            </div>
            <div className="right-pane">
                <h2 className="Title">About Me</h2>
                <div className="aboutMeParagraph">
                    <p>Hey everyone! Glad you've checked out my portfolio!
                        I'm a full stack web developer in Philadelphia, PA with a background
                        in finance. I was introduced to programming around 2012 during
                        my time in college and it wasn't until 2019 where I really started to 
                        formalize my training into a career. I recently completed the Penn LPS 
                        coding bootcamp which was primarily geared towards full stack web development.
                        I've worked with technologies and langauages like Javascript, HTML, CSS, JQuery, 
                        React JS, MongoDB, Mongoose, MySQL, Sequelize, Firebase, Node, NPM, Express, 
                        and Handlebars. I've leveraged API's such as GoogleBooks, Spotify, Deezer, IMDB, 
                        and SeatGeek to support some of my projects.
                        
                    </p>
                </div>
                <br></br>
                <h2 className="Title">Contact Details</h2>
                <div className="info">
                    <ul>Phil Swartz</ul>
                    <ul>Philadelphia, PA</ul>
                    <ul>610-675-5479</ul>
                    <ul>pswartz.sju@gmail.com</ul>
                </div>
                <a download="PhillipSwartzResume" target="_blank" rel="noopener noreferrer" href={resume}>
                    <button className="download-btn">
                        <FaDownload />
                        <span id="download-text">Download Resume</span>
                    </button>
                </a>
            </div>
        </div>
    )
}

export default AboutMe;