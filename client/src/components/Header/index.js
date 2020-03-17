import React from 'react';
import './style.css';
import CustomNav from '../CustomNav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled, { keyframes } from 'styled-components';
import slideInLeft from 'react-animations/lib/slide-in-left';
import slideInRight from 'react-animations/lib/slide-in-right';
import fadeOutUpBig from 'react-animations/lib/fade-in-up-big';
import fadeInUp from 'react-animations/lib/fade-in-up';
import { FaGithub, FaLinkedinIn, FaInstagram, FaAngleDown } from 'react-icons/fa';
import { Link } from "react-scroll";


// Animations for header section on initial page load
const leftSlide = keyframes`${slideInLeft}`;
const SlideLeft = styled.div`
  animation: 2.9s ${leftSlide};
`;
const rightSlide = keyframes`${slideInRight}`;
const SlideRight = styled.div`
  animation: 2.9s ${rightSlide};
`;
const myFadeBigGit = keyframes`${fadeOutUpBig}`;
const FadeBigGit = styled.div`
  animation: 1.1s ${myFadeBigGit};
`;
const myFadeBigLink = keyframes`${fadeOutUpBig}`;
const FadeBigLink = styled.div`
  animation: 1.3s ${myFadeBigLink};
`;
const myFadeBigGram = keyframes`${fadeOutUpBig}`;
const FadeBigGram = styled.div`
  animation: 1.6s ${myFadeBigGram};
`;
const myFadeIn = keyframes`${fadeInUp}`;
const FadeIn = styled.div`
  animation: 2.9s ${myFadeIn};
`;

const Header = (props) => {

    return (
        <div>
            <header id="home">
                <CustomNav />
                <section id="intro-container">
                    <div id="intro">
                        <SlideLeft>Hi, I'm Phil. <span className="span-text">I design and build websites in React.
                        </span>
                            <div className="divider-two"></div>
                        </SlideLeft>

                        <SlideRight>

                            <Row>
                                <Col></Col>
                                <Col></Col>

                                <Col>
                                    <FadeBigGit>
                                        <a className="header-icons" href="https://github.com/pswartz66">
                                            <FaGithub size={24} />
                                        </a>
                                    </FadeBigGit>

                                </Col>
                                <Col>
                                    <FadeBigLink>
                                        <a className="header-icons" href="https://www.linkedin.com/in/phillip-swartz-a6816199/">
                                            <FaLinkedinIn size={24} />
                                        </a>
                                    </FadeBigLink>
                                </Col>
                                <Col>
                                    <FadeBigGram>
                                    <a className="header-icons" href="https://www.instagram.com/philswartz/?hl=en">
                                        <FaInstagram size={24} />
                                    </a>
                                    </FadeBigGram>
                                </Col>
                                <Col></Col>
                                <Col></Col>

                            </Row>
                        </SlideRight>
                        <SlideLeft>
                            <Row>

                                <Col>
                                    <hr className="divider"></hr>
                                </Col>

                            </Row>
                        </SlideLeft>
                        <Row>
                            <Col>
                                <FadeIn>
                                    <a className="down-arrow" href="">
                                    <Link
                                        activeClass="active"
                                        to="aboutMeContainer"
                                        spy={true}
                                        smooth={true}
                                        offset={0}
                                        duration= {1000}
                                    >
                                        <FaAngleDown color={'rgb(94, 248, 114)'} size={28} />
                                    </Link> 
                                    </a>
                                </FadeIn>

                            </Col>
                        </Row>
                    </div>

                </section>

            </header>
            
        </div>
    )
}

export default Header;