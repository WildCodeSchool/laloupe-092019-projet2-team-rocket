import React, {Component} from 'react';

class ButtonLanguage extends Component{
    render(){
        return(
            <div>
                <div className="section-language">
                    <p className="label-audio">LANGUAGE</p>
                    <label class="activate btn-radio"> ENGLISH </label>
                    <input type="radio" name="language" className="btn-audio" checked/>
                    <span class="slider round"></span>

                    <label class="desactivate btn-radio"> FRENCH </label>
                    <input type="radio" name="language" className="btn-audio"/>
                    <span class="slider round"></span>                   
                </div>
            </div>
        )
    }
}

export default ButtonLanguage;