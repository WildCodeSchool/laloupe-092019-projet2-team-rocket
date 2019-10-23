import React from 'react';
import './Logo.css';


const logo = {
    url : '/img/logo.png',
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
            className="col-2"
            >

            <img
            src={logo.url}
            alt={logo.character}
            className=""
            ></img>
            </div>
        );
    }
}

export default Logo;

