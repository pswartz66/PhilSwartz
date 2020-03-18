import React from 'react';
import { FaDownload } from 'react-icons/fa';
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
                <h2 className="Title">About Me</h2>
                <div className="aboutMeParagraph">
                    <p>Hey everyone! Glad you've checked out my portfolio!
                        To give a little background, I was introduced to programming
                        around 2012 during my time in college. After graduating I used a number
                        of online tools like YouTube, Udemy, and free textbooks to learn about Python since
                        I was intruged by data. Most recently I completed the Penn LPS coding bootcamp which was primarily geared
                        towards full stack web development.
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
                <button className="download-btn">
                    <FaDownload />
                    <span id="download-text"> Download Resume</span>
                </button>
            </div>
        </div>
    )
}

export default AboutMe;