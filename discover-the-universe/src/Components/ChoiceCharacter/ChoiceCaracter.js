import React, { Component } from 'react';
import LinkButton from '../LinkButton';
import NavBar from '../HomePage/Nav/NavBar';
import "./ChoiceCharacter.css";
import "../../Grid.css";
import { connect } from 'react-redux';
import {SELECT_CHARACTER} from '../actionTypes';


class ChoiceCharacter extends Component {
    constructor() {
        super();

        this.state = {
            userInput: '',
            currentCharacter: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            userInput: event.target.value
        })
    }

    handleCharcterSelection = (event) => {
        let character = event.target.value;
        this.setState({
            currentCharacter: character
        })
        
        this.props.dispatch({type:SELECT_CHARACTER.type, character});
    }





    render() {

        
        return (
            <div>
                <div className="CharacterPage">
                    <NavBar />
                </div>

                <div className="container-elements mob-6 tab-6 dsk-6">
                    <p className="par">
                        <input
                            placeholder={this.props.lang.choiceCharacterPlaceholder[0]}
                            value={this.state.userInput}
                            onChange={this.handleChange.bind(this)}>
                        </input>
                    </p>

                    <div className="avatar">
                        <div className="btn-radio">
                            <img src="/images/astronaute1.png" className="d-block w-100 avatar1" alt="..." />
                            <input onClick={this.handleCharcterSelection} className="input-radio" value="/images/astronaute1.png" type="radio" name="audio" defaultChecked/>
                        </div>
                        <div className="btn-radio">
                            <img src="/images/astronaute2.png" className="d-block w-100 avatar2" alt="..." />
                            <input onClick={this.handleCharcterSelection} className="input-radio" value="/images/astronaute2.png" type="radio" name="audio" />
                        </div>
                        <div className="btn-radio">
                            <img src="/images/astronaute3.png" className="d-block w-100 avatar3" alt="..." />
                            <input onClick={this.handleCharcterSelection} className="input-radio" value="/images/astronaute3.png" type="radio" name="audio" size="20" />
                        </div>
                    </div>

                    <div className="btn-next">
                        {
                            this.state.userInput != '' ? <p><LinkButton className='btn btn-warning btn-ChoiceCharacter' to='/ChoicePlanets'>{this.props.lang.choiceCharacter[1]}</LinkButton></p> : ''
                        }
                    </div>

                    <div className="btn">

                        <LinkButton className="btn-Choice" type="button" to="/">{this.props.lang.choiceCharacter[0]}</LinkButton>

                    </div>
                </div>
            </div>
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
