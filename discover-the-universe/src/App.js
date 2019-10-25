import React, { Component} from 'react';
import NavBar from './Components/Nav/NavBar';
import LauncherPage from './Components/LauncherPage/LauncherPage';
import LauncherSettings from './Components/LauncherSettings/LauncherSettings';
import Footer from './Components/Footer/Footer';
class App extends Component{
    render(){
        return(
            <div>
                <NavBar />
                <LauncherPage />
                <Footer />

            </div>
        )
    }
}

export default App;
