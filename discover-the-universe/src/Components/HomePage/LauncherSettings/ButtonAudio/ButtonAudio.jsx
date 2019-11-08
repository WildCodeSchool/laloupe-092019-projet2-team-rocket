import React, { Component } from 'react';
import './ButtonAudio.css';
import '../../../../Grid.css';
import { connect } from 'react-redux';

class ButtonAudio extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <>
                <div className="section-audio">
                    <div className="activate">
                        <div className="div-audio-img">
                            <img className="audio-img" src="/images/audio.png" />
                        </div>

                        <div className="radio-activate">
                            <label className="activate btn-radio"> {this.props.lang.audio[0]} </label>
                            <input type="radio" name="audio" className="btn-audio" />
                            <span className="slider round"></span>
                        </div>

                    </div>

                    <div className="radio-desactivate">
                        <label className="desactivate btn-radio">{this.props.lang.audio[1]} </label>
                        <input type="radio" name="audio" className="btn-audio" />
                        <span className="slider round"></span>
                    </div>



                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return ({
        lang: state.lang
    })
};

export default connect(mapStateToProps)(ButtonAudio);
