import React from 'react';
import './Title.css';

class Title extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div
            className="col-4">

            <div className="titi row">

            <h1
            alt="Title"
            className=""
            >
            Discovery The Universe</h1>
            </div>
            </div>
        );
    }
}

export default Title;