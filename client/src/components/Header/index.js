import React from 'react';
import './style.css';
import Nav from '../Nav'

const Header = () => {

    return (
        <div>
            <header id="home">
                <Nav />
                <section id="intro">
                    Hi, I'm Phil.
                </section>
            </header>

        </div>
    )

}

export default Header;