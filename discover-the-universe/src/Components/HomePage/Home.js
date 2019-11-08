import React, { Component} from 'react';
import LauncherPage from './LauncherPage/LauncherPage';
import LauncherSettings from './LauncherSettings/LauncherSettings';
import Footer from './Footer/Footer';
import Nav from './Nav/NavBar';
import './HomePage.css';
import { connect } from 'react-redux';

class Home extends Component{
    constructor(){
        super();
        this.state = {
            btnSetting:false,
            count:0
        }
    }

    handleClickSetting = (event) => {
        event.preventDefault();
        if(this.state.count === 0){
            this.setState({
                btnSetting:true,
                count:1
            })
        }else if(this.state.count === 1){
            this.setState({
                btnSetting:false,
                count:0
            }) 
        }
       

    }

    render(){
        console.log(this.state);
        return(
            <div>
                <Nav/>
                <div className="div-setting">
                    <button className="btn-setting" onClick={this.handleClickSetting}>{this.props.lang.setting[0]}</button> 
                </div>
                    {this.state.btnSetting ? <LauncherSettings />:""}
                
                <LauncherPage />
                <Footer />
            </div>
        )
    }
}


const mapStateToProps = state => {
    return ({
        lang: state.lang
    })
};

export default connect(mapStateToProps)(Home);
