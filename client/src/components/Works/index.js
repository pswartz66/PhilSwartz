import React from 'react';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import portfolio from '../../assets/img/port-img.png';
import styled, { keyframes } from 'styled-components';
import flipInX from 'react-animations/lib/rubber-band';
import './style.css';

const leftSlide = keyframes`${flipInX}`;
const SlideLeft = styled.div`
        animation: 2.0s ${leftSlide};
`;

const Works = () => {
    return (

        <SlideLeft>
            <div className="worksContainer">

                <div className="opacityContainer"></div>

            </div>
        </SlideLeft>
    )


}

export default Works;