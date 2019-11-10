import React, {Component} from 'react';
import { connect } from 'react-redux';
import {SELECT_CHARACTER} from '../actionTypes';


class RetriedvalCharacterIndex extends Component{
    constructor(props){
        super(props);

    }

    handleChangeCharacter = () => {
        let character = this.props.index;
        this.props.dispatch({type:SELECT_CHARACTER.type, character});
    }

    componentDidMount(){
        this.handleChangeCharacter();
    }

    componentDidUpdate(){
        this.handleChangeCharacter();
    }

    render(){
        
        return(
            <div>

            </div>
        )
    }
}



const mapStateToProps = state => {

    return ({
        currentCharacter: state.currentCharacter
    })
};

export default connect(mapStateToProps)(RetriedvalCharacterIndex);
