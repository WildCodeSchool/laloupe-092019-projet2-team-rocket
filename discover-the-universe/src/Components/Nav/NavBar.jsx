import React from 'react';
import Logo from './Logo/Logo';
import Title from './Title/Title';
import State from './State/State';
import './NavBar.css';

function NavBar() {
    
    return(
        <div className="row spaces">
            <Logo />
            <Title />
            <State />
        </div>
    );
}

export default NavBar;