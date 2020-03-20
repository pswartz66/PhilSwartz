import React from 'react';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import portfolio from '../../assets/img/port-img.png';
import styled, { keyframes } from 'styled-components';
import flipInX from 'react-animations/lib/slide-in-left';
import ReactLogo from '../../assets/img/logo192.png';
import './style.css';

const leftSlide = keyframes`${flipInX}`;
const SliderLeft = styled.div`
        animation: 2.0s ${leftSlide};
`;

const Works = () => {
    return (

        <div>
            <div className="worksContainer">
                <h4>Check out some of my work.</h4>
                    <div className="work-item">
                        <div className="items">
                            <h6>ReactJS</h6>
                            <h3>My Portfolio</h3>
                            <p>REACT JS single page application showcasing my work and resume.</p>
                            <a className="viewDetails" href="addlinkhere">VIEW DETAILS</a>
                       
                        </div>

                        <div className="item-img">
                            <img alt="react" className="react-img" src={ReactLogo}></img>
                        </div>
                    </div>

                    <br></br>
                    <div className="work-item">
                        <div className="item-img">
                            <img alt="react" className="react-img" src={ReactLogo}></img>
                        </div>
                        <div className="items">
                            <h6>ReactJS</h6>
                            <h3>My Portfolio</h3>
                            <p>REACT JS single page application showcasing my work and resume.</p>
                            <a className="viewDetails" href="addlinkhere">VIEW DETAILS</a>
                        </div>
                        
                    </div>
                    <br></br>

                    <div className="work-item">
                        
                        <div className="items">
                            <h6>ReactJS</h6>
                            <h3>My Portfolio</h3>
                            <p>REACT JS single page application showcasing my work and resume.</p>
                            <a className="viewDetails" href="addlinkhere">VIEW DETAILS</a>
                        </div>
                        <div className="item-img">
                            <img alt="react" className="react-img" src={ReactLogo}></img>
                        </div>
                        
                    </div>

                

            </div>

        </div>
    )

}

export default Works;