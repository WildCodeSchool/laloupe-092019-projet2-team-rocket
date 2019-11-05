import React, { Component} from 'react';
import LauncherPage from './LauncherPage/LauncherPage';
import LauncherSettings from './LauncherSettings/LauncherSettings';
import Footer from './Footer/Footer';
import Nav from './Nav/NavBar';

class Home extends Component{
    render(){
        return(
            <div>
                <Nav/>
                <LauncherPage />
                <LauncherSettings />
                <Footer />
            </div>
        )
    }
}


export default Home;