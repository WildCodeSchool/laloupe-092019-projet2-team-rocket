import React, {Component} from 'react';
import './ButtonAudio.css';
import '../../../Grid.css';

class ButtonAudio extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div>
                <div className="section-audio">
                    <p className="label-audio">AUDIO</p>
                    <label class="activate btn-radio"> ACTIVATE </label>
                    <input type="radio" name="audio" className="btn-audio" checked/>
                    <span class="slider round"></span>

                    <label class="desactivate btn-radio"> DESACTIVATE </label>
                    <input type="radio" name="audio" className="btn-audio"/>
                    <span class="slider round"></span>
                </div> 
            </div>
        )
    }
}

export default ButtonAudio;