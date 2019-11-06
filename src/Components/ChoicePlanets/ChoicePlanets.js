import React, {Component} from 'react';
import NavBar from '../HomePage/Nav/NavBar';
import { connect } from 'react-redux';

class ChoicePlanets extends Component{
    constructor(){
        super();
    }
    render(){
        console.log(this.props.currentCharacter);
        return(
            <div>
               <NavBar />
               <img src={`${this.props.currentCharacter}`}/>
            </div>
        )
    }
}

const mapStateToProps = state => {

    return ({
        lang: state.lang, 
        currentCharacter: state.currentCharacter
    })
};


export default connect(mapStateToProps)(ChoicePlanets);

