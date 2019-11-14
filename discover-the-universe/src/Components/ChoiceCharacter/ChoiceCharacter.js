import React, { Component, Fragment } from 'react';
import LinkButton from '../LinkButton';
import NavBar from '../HomePage/Nav/NavBar';
import "./ChoiceCharacter.css";

import { connect } from 'react-redux';
import {SELECT_CHARACTER,SELECT_NAME_CHARACTER} from '../actionTypes';
import SliderAvatar from './SliderAvatar';


class ChoiceCharacter extends Component {
    constructor() {
        super();

        this.state = {
            userInput: ''
        }
    }

    
    handleChange = (event) => {
        this.setState({
            userInput: event.target.value
        })
        let name = event.target.value;
        this.props.dispatch({type:SELECT_NAME_CHARACTER.type, name:name});
    }

    handleCharcterSelection = (event) => {
        let character = event.target.value;
        this.props.dispatch({type:SELECT_CHARACTER.type, character: character});
    }



    render() {
        
        return (
            <Fragment>
                <div className="CharacterPage">
                    <NavBar />
                </div>

                
                <div className="container mob-12 tab-12 dsk-12">
                <div>
                
                    <h4 className="row justify-content-center">{this.props.lang.choiceCharacter[2]}</h4>
                    <div className="row justify-content-center">
                    
                        <p className="input-name ">
                            <input
                                placeholder={this.props.lang.choiceCharacterPlaceholder[0]}
                                value={this.state.userInput} required
                                onChange={this.handleChange.bind(this)}>
                            </input>
                        
                        </p>
                    </div>
                    
                    
                    <div className="avatar-component">
                    <h4 className="row justify-content-center">{this.props.lang.choiceCharacter[3]}</h4>
                        <SliderAvatar />
                    </div>
                    

                    <div className="row justify-content-center ">
                        <LinkButton className="btn btn-success btn-ChoiceCharacter" to="/">{this.props.lang.choiceCharacter[4]}</LinkButton>
                        {
                            this.state.userInput != '' 
                            ? 
                            <LinkButton className='btn btn-success btn-ChoiceCharacter' to='/ChoicePlanets'>{this.props.lang.choiceCharacter[1]}</LinkButton>
                            :
                            <LinkButton className='btn btn-warning btn-ChoiceCharacter' to='/ChoiceCharacter'>{this.props.lang.choiceCharacter[1]}</LinkButton>
                            
                        }
                    </div>
                </div>
                </div>
            </Fragment>
        );
    }
}



const mapStateToProps = state => {

    return ({
        lang: state.lang, 
        currentCharacter: state.currentCharacter
    })
};

export default connect(mapStateToProps)(ChoiceCharacter);
