import React, {Component} from 'react';
import NavBar from '../HomePage/Nav/NavBar';

class ChoicePlanets extends Component{
    constructor(props){
        super(props);
    }
    render(){
        console.log(this.props.character);
        return(
            <div>
               <NavBar />
               <img src={`"${this.props.character}"`}/>
            </div>
        )
    }
}

export default ChoicePlanets;