import React, { Component} from 'react';
import Home from './Components/HomePage/Home';
import {Switch, Route} from 'react-router-dom';
import ChoiceCaracter from './Components/ChoiceCharacter/ChoiceCaracter';
import ChoicePlanets from './Components/ChoicePlanets/ChoicePlanets';
import InfoPage from './Components/InfoPage/PageInfo/PageInfo';

class App extends Component{
    render(){
        return(
            <div>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/ChoiceCharacter' component={ChoiceCaracter}/>
                    <Route path='/ChoicePlanets' component={ChoicePlanets}/>
                    <Route path='/InfoPage' component={InfoPage}/>
                </Switch>
            </div>
        )
    }
}


export default App;