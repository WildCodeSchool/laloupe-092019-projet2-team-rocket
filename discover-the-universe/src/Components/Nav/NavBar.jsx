import React from 'react';
import Logo from './Logo/Logo';
import Title from './Title/Title';
import State from './State/State';
import './NavBar.css';
import './Grid.css';

function NavBar() {

    return (
        <div className="row nav">
            <div className="mob-3 tab-3 dsk-2 align-center">
                <Logo />
            </div>
            <div className="mob-8 tab-8 dsk-4 align-center">
                <Title />
            </div>
            <div className="mob-1 tab-8 dsk-0"></div>
            <div className="mob-12 tab-12 dsk-6">
                <State />
            </div>
        </div>
    );
}

export default NavBar;