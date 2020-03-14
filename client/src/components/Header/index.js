import React from 'react';
import './style.css';
import CustomNav from '../CustomNav'

const Header = () => {

    return (
        <div>
            <header id="home">
                <CustomNav />
                <section id="intro-container">
                    <div id="intro">

                        Hi, I'm Phil. <span className="span-text">I design and build websites in React.
                        </span>
                        <div id="sub-intro">
                            Follow me @
                        </div>
                        {/* <div className="social-icons">
                            fiuwheifuhwi
                        </div> */}
                        <hr className="divider"></hr>
                    </div>

                </section>


            </header>

        </div>
    )

}

export default Header;