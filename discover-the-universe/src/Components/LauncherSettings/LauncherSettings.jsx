import React, {Component} from 'react';
import ButtonAudio from './ButtonAudio/ButtonAudio';
import ButtonLanguage from './ButtonLanguage/ButtonLanguage';
import '../../Grid.css';
import './LauncherSettings.css';

class LauncherSetting extends Component{
    render(){
        return(
            <div className="row section2">
                <div className="composant-audio">
                    <ButtonAudio />
                </div>
                <div className="composant-language">
                    <ButtonLanguage />
                </div>
               
            </div>
        )
    }
}

export default LauncherSetting;