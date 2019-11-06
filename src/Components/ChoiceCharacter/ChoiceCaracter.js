import React, { Component } from 'react';
import LinkButton from '../LinkButton';
import NavBar from '../HomePage/Nav/NavBar';
import "./ChoiceCharacter.css";
import "../../Grid.css";
import { connect } from 'react-redux';




class ChoiceCharacter extends Component {
    constructor() {
        super();

        this.state = {
            userInput: '',
            character:'/images/astronaute1.png'
        }
    }

    handleChange = (event)  => {
        this.setState({
            userInput: event.target.value
        })
    }

    handleCharcterSelection = (event) =>{
        this.setState({
            character:event.target.value
        })
    }

    handleValideCharacter = () => {
        /*this.props.dispatch(action);*/
        console.log("character validé");
    }


    render() {
        console.log("nickName : ",this.state.userInput);
        console.log("character : ",this.state.character);
        console.log(this.props.lang);
        return (
            <div>
                <div className="CharacterPage">
                    <NavBar />
                </div>

                <div className="container-elements mob-6 tab-6 dsk-6">
                    <p className="par">
                        <input
                            placeholder="Nickname"
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
                            this.state.userInput != '' ? <p><LinkButton onClick={this.handleValideCharacter} className='btn btn-warning btn-ChoiceCharacter' to='/ChoicePlanets' character={this.state.character}>{this.props.lang.choiceCharacter[1]}</LinkButton></p> : ''
                        }
                    </div>

                    <div className="btn">
                        <a href="/">
                            <button className="btn-Choice" type="button">{this.props.lang.choiceCharacter[0]}</button>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}



const mapStateToProps = state => {
    return ({
        lang: state
    })
};


export default connect(mapStateToProps)(ChoiceCharacter);
