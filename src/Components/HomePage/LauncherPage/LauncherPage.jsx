import React, {Component} from 'react';
import LauncherButton from './LauncherButton/LauncherButton';
import './LauncherPage.css';
import '../../../Grid.css';


class LauncherPage extends Component{

    render(){
        return(
            <div className="section1">
                <LauncherButton /> 
            </div>
        )
    }
}

export default LauncherPage;
