import React, { Component} from 'react';
import LauncherPage from './Components/LauncherPage/LauncherPage';
import LauncherSettings from './Components/LauncherSettings/LauncherSettings';
import Footer from './Components/Footer/Footer';
import Nav from './Components/Nav/NavBar';
class App extends Component{
    render(){
        return(
            <div>
                <Nav />
                <LauncherPage />
                <Footer />

            </div>
        )
    }
}


export default App;
