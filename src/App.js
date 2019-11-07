import React, { Component} from 'react';
import Home from './Components/HomePage/Home';
import {Switch, Route} from 'react-router-dom';
import ChoiceCaracter from './Components/ChoiceCharacter/ChoiceCaracter';
import ChoicePlanets from './Components/ChoicePlanets/ChoicePlanets';
import Uranus from './Components/InfoPage/Planets/Uranus/Uranus';
import Mars from './Components/InfoPage/Planets/Mars/Mars';
import Jupiter from './Components/InfoPage/Planets/Jupiter/Jupiter';
import Venus from './Components/InfoPage/Planets/Venus/Venus';

class App extends Component{
    render(){
        return(
            <div>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/ChoiceCharacter' component={ChoiceCaracter}/>
                    <Route path='/ChoicePlanets' component={ChoicePlanets}/>
                    <Route path='/Mars' component={Mars}/>
                    <Route path='/Venus' component={Venus}/>
                    <Route path='/Jupiter' component={Jupiter}/>
                    <Route path='/Uranus' component={Uranus}/>
                </Switch>
            </div>
        )
    }
}


export default App;