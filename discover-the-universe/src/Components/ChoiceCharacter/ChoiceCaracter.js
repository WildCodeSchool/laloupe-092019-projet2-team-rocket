import React, {Component} from 'react';
import LinkButton from '../LinkButton';

class ChoiceCharacter extends Component{
    render(){
        return(
            <div>
                <h1>Je suis sur la page ChoiceCharacter</h1>
                <input 
                    placeholder="Nickname">
                </input>
                <img src="/images/astronaute.png"/>
                <LinkButton to='/ChoicePlanets'> NEXT </LinkButton>
            </div>
        )
    }
}

export default ChoiceCharacter;