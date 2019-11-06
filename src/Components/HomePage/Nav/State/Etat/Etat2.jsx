import React from 'react';
import './Etat.css';


class Etat2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return ( 
            <div
            alt="2"
            className="etat2 etat"
            >
                <img 
                src="/images/mars.png " 
                alt=""
                className="imgplanet img1"
                />
            </div>
        );
    }
}

export default Etat2;
