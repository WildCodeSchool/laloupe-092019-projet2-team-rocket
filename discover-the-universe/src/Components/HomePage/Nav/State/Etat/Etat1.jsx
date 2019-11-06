import React from 'react';
import './Etat.css';


class Etat1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return ( 
            <div
            alt="1"
            className="etat1 etat"
            >
                <img 
                src="/images/asteroid.png " 
                alt=""
                className="imgplanet img1"
                />
            </div>
        );
    }
}

export default Etat1;
