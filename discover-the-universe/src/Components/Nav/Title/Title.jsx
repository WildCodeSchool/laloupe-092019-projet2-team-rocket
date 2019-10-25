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
            <div className="mob-12">
                    <h3
                        alt="Title"
                        className=""
                    >Discovery The Universe</h3>
                </div>
        );
    }
}

export default Title;