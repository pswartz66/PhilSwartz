import React from 'react';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import portfolio from '../../assets/img/portimg.png';
// import styled, { keyframes } from 'styled-components';
// import flipInX from 'react-animations/lib/slide-in-left';
import ReactLogo from '../../assets/img/logo192.png';
import NodeLogo from '../../assets/img/node-image.png';
import MongoLogo from '../../assets/img/mongodb-logo-1.png';
import ExpoLogo from '../../assets/img/expo-img.jpeg';
import ReactCardFlip from 'react-card-flip';
// Portfolio project = PF
import FrontCardPF from '../FrontCardPF';
import BackCardPF from '../BackCardPF';
// Bamazon project = BM
import FrontCardBM from '../FrontCardBM';
import BackCardBM from '../BackCardBM';
import './style.css';

// const leftSlide = keyframes`${flipInX}`;
// const SliderLeft = styled.div`
//         animation: 2.0s ${leftSlide};
// `;

class Works extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFlipped: false,
            isFlippedBM: false
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleClickBM = this.handleClickBM.bind(this);

    }

    handleClick(event) {
        event.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    handleClickBM(event) {
        event.preventDefault();
        console.log('2nd clicked');
        this.setState(prevStateBM => ({ isFlippedBM: !prevStateBM.isFlippedBM }));
    }

    render() {
        return (
            <div className="worksContainer">
                <h4>Check out some of my work.</h4>

                <div className="work-item">
                    {/* <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">

                        <FrontCardPF onClick={this.handleClick} />
                        <BackCardPF onClick={this.handleClick} /> */}

                        <div className="items">
                            <h6>ReactJS</h6>
                            <h3>My Portfolio</h3>
                            <p>Single page application showcasing my work and resume.</p>
                            <a className="viewDetails" href="https://github.com/pswartz66/PhilSwartz">VIEW DETAILS</a>
                        </div>
                    {/* </ReactCardFlip> */}
                    <div className="item-img">
                        <img alt="react" className="react-img" src={ReactLogo}></img>
                    </div>

                </div>


                <br></br>
                <div className="work-item">
                    <div className="item-img">
                        <img alt="node" className="node-img" src={NodeLogo}></img>
                    </div>
                    <div className="items">
                        <h6>NodeJS + MySQL</h6>
                        <h3>Bamazon</h3>
                        <p>CLI application that uses inquirer and cli-table with mysql to maintain beer and liquor inventory.</p>
                        <a className="viewDetails" href="https://github.com/pswartz66/bamazon">VIEW DETAILS</a>
                    </div>
                    {/* <ReactCardFlip isFlippedBM={this.state.isFlippedBM} flipDirection="horizontal">
                        <FrontCardBM onClick={this.handleClickBM} />
                        <BackCardBM onClick={this.handleClickBM} />
                    </ReactCardFlip> */}

                </div>
                <br></br>
                <div className="work-item">
                    <div className="items">
                        <h6>ReactJS + Express + Node + MongoDB</h6>
                        <h3>Patient First</h3>
                        <p>Health data collection app for patients to share information with their primary care physician.</p>
                        <a className="viewDetails" href="https://github.com/maleszewskid/Project-3">VIEW DETAILS</a>
                    </div>
                    <div className="item-img">
                        <img alt="mongo" className="mongo-img" src={MongoLogo}></img>
                    </div>
                </div>
                <br></br>
                <div className="work-item">
                    <div className="item-img">
                        <img alt="expo" className="expo-img" src={ExpoLogo}></img>
                    </div>
                    <div className="items">
                        <h6>React-Native + Expo + MongoDB Stitch</h6>
                        <h3>Tennis Ranker</h3>
                        <p>Mobile application that uses expo and mongo for tennis coaches to track their players records.</p>
                        <a className="viewDetails" href="https://github.com/pswartz66/TennisRanker">VIEW DETAILS</a>
                    </div>

                </div>
            </div>
        )
    }
}

export default Works;