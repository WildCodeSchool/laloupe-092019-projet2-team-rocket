import React, { Component } from 'react';
import './ButtonLanguage.css';
import { connect } from 'react-redux';



import {SET_ENGLISH, SET_FRENCH} from '../../../actionTypes';

class ButtonLanguage extends Component {

    onChangeLanguage(action){
        this.props.dispatch(action);
    }

    render() {
       
        return (
            <div>
                <div className="section-language">
                    <div className="activate">
                        <img className="language-img" src="/images/language.png" />
                        <div>
                            <label className="activate btn-radio">{this.props.lang.language[0]}</label>
                            <input onChange={ () => this.onChangeLanguage(SET_ENGLISH) } type="radio" name="language"  className="btn-language" defaultChecked/>
                            <span className="slider round"></span>
                        </div>
                    </div>


                    <div className="desactivate">
                        <label className="desactivate btn-radio">{this.props.lang.language[1]}</label>
                        <input onChange={ () => this.onChangeLanguage(SET_FRENCH) }  type="radio" name="language"  className="btn-language" />
                        <span className="slider round"></span>
                    </div>

                </div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return ({
        lang: state
    })
};


export default connect(mapStateToProps)(ButtonLanguage);
