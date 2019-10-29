import React from 'react';
import './Logo.css';


const logo = {
    url : '/images/logo.svg',
    character : 'Discovery the Universe Logo'
}

class Logo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return ( 
            <div
            className=""
            >

            <img
            src={logo.url}
            alt={logo.character}
            className="img2"
            ></img>
            </div>
        );
    }
}

export default Logo;

