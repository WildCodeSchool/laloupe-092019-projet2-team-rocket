import React from 'react';
import './Title.css';
import '../Grid.css';
class Title extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="mob-12 tab-12 center">
                    <h3
                        alt="Title"
                        className="mob-font-title tab-font-title dsk-font-title"
                    >Discovery The Universe</h3>
                </div>
        );
    }
}

export default Title;