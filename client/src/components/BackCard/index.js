import React from 'react';
import './style.css';


const BackCard = (props) => {

    const sampleString = "const leftSlide = keyframes`${slideInLeft}` \n" +
                        "const SlideLeft = styled.div`\n" +
                        "  animation: 2.9s ${leftSlide};\n" +
                        "`;"
                        ;
    
    let sampleString2 = "<FadeIn> \n" +
                        '  <a className="down-arrow" href="#anchor">\n' +
                        "    <Link \n" +
                        '      activeClass="active" \n' +
                        '      to="aboutMeContainer" \n' +
                        '      spy={true} \n' +
                        '      smooth={true} \n' +
                        '      offset={0} \n' +
                        '      duration= {1000} \n' +
                        '      className="down-arrow" \n' +
                        '      > \n' +
                        '      <FaAngleDown color={"rgb(94, 248, 114)"}\n' +
                                '                   size={28} /> \n' +
                        '    </Link> \n' +
                        '  </a> \n' +
                        '</FadeIn>';

    return (
        <div onClick={props.onClick} className="back-items">
            <h6>Code snippets from the project</h6>
            <br></br>
            <pre className="back-comment">{"// Animation when page loads using \n// styled components"}</pre>
            <pre>{sampleString}</pre>
            <br></br>
            <pre className="back-comment">{"// Smooth scroll to new section \n// using Link from react-scroll lib"}</pre>
            <pre>{sampleString2}</pre>
            <br></br>
        </div>
    )
}


export default BackCard;