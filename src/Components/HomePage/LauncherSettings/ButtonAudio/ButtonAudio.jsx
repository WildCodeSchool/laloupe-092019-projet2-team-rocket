import React, {Component} from 'react';
import './ButtonAudio.css';
import '../../../../Grid.css';
import { connect } from 'react-redux';

class ButtonAudio extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div>
                <div className="section-audio">
                    <div className="activate">
                        <img className="audio-img" src="/images/audio.png"/>
                        <div>
                            <label className="activate btn-radio"> {this.props.lang.audio[0]} </label>
                            <input type="radio" name="audio" className="btn-audio"/>
                            <span className="slider round"></span>      
                        </div>
  
                    </div>

                    <div className="desactivate">
                        <label className="desactivate btn-radio">{this.props.lang.audio[1]} </label>
                        <input type="radio" name="audio" className="btn-audio"/>
                        <span className="slider round"></span>
                    </div>



                </div> 
            </div>
        )
    }
}

const mapStateToProps = state => {
    return ({
        lang: state
    })
};

export default connect(mapStateToProps)(ButtonAudio);
