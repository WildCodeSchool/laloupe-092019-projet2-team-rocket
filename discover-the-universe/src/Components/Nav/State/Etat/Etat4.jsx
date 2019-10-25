import React from 'react';
import './Etat.css';


class Etat4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return ( 
            <div
            alt="4"
            className="etat4 etat"
            >
                <img 
                src="/images/asteroid.png" 
                alt=""
                className="img2 img1"
                />
            </div>
        );
    }
}

export default Etat4;
