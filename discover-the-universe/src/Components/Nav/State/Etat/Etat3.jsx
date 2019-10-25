import React from 'react';
import './Etat.css';


class Etat3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return ( 
            <div
            alt="3"
            className="etat3 etat"
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

export default Etat3;
