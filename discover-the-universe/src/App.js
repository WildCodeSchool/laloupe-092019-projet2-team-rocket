import React, { Component} from 'react';
import Home from './Components/HomePage/Home';
import {Switch, Route} from 'react-router-dom';
import ChoiceCaracter from './Components/ChoiceCharacter/ChoiceCharacter';
import ChoicePlanets from './Components/ChoicePlanets/ChoicePlanets';
import DisplayPlanet from './Components/DisplayPlanet/DisplayPlanet';

class App extends Component{
    render(){
        return(
            <div>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/ChoiceCharacter' component={ChoiceCaracter}/>
                    <Route path='/ChoicePlanets' component={ChoicePlanets}/>
                    <Route path='/DisplayPlanet' component={DisplayPlanet}/>
                </Switch>
            </div>
        )
    }
}


export default App;