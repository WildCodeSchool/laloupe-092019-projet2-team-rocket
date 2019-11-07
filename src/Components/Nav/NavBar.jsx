import React from 'react';
import Logo from './Logo/Logo';
import Title from './Title/Title';
import State from './State/State';
import './NavBar.css';
import './Grid.css';

function NavBar() {

    return (
        <div className="row nav">
            <div className="mob-3 align-center">
                <Logo />
            </div>
            <div className="mob-8 ">
                <Title />
            </div>
            <div className="mob-1"></div>
            <div className="mob-12">
                <State />
            </div>
        </div>
    );
}

export default NavBar;