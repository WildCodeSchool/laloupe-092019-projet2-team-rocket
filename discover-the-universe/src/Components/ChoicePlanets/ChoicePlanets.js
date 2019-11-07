import React, { Component } from 'react';
import NavBar from '../HomePage/Nav/NavBar';
import { connect } from 'react-redux';
import './ChoicePlanets.css';
import LinkButton from '../LinkButton';

class ChoicePlanets extends Component {
    constructor() {
        super();
        this.state = {
            mars: "",
            venus: "",
            jupiter: "",
            uranus: ""
        }
    }

    componentDidMount() {
        this.getMars();
        this.getVenus();
        this.getJupiter();
        this.getUranus();
    }

    getMars() {
        fetch('https://images-api.nasa.gov/search?q=mars')
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    mars: data.collection.items[88].links[0].href
                }, console.log(data.collection.items[54].links[0].href))
            })
    }

    getVenus() {
        fetch('https://images-api.nasa.gov/search?q=venus')
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    venus: data.collection.items[28].links[0].href
                })
            })
    }

    getJupiter() {
        fetch('https://images-api.nasa.gov/search?q=jupiter')
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    jupiter: data.collection.items[60].links[0].href
                })
            })
    }

    getUranus() {
        fetch('https://images-api.nasa.gov/search?q=uranus')
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    uranus: data.collection.items[3].links[0].href
                })
            })
    }

    render() {
        console.log(this.props.currentCharacter);
        return (
            <div>
                <NavBar />
                <div className="container block">
                    <div className="astronaute">
                        <img className="choicePlanetAstronaute" src={`${this.props.currentCharacter}`} />
                    </div>
                    <div className="planets">
                        <div className="planet1"><LinkButton className="btn-planet1" to="/"> <img className="pics-planet" src={`${this.state.mars}`} alt="mars" /></LinkButton></div>
                        <div className="planet1"><LinkButton className="btn-planet1" to="/"> <img className="pics-planet" src={`${this.state.mars}`} alt="mars" /></LinkButton></div>
                        <div className="planet1"><LinkButton className="btn-planet1" to="/"> <img className="pics-planet" src={`${this.state.mars}`} alt="mars" /></LinkButton></div>
                        <div className="planet1"><LinkButton className="btn-planet1" to="/"> <img className="pics-planet" src={`${this.state.mars}`} alt="mars" /></LinkButton></div>

                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = state => {

    return ({
        lang: state.lang,
        currentCharacter: state.currentCharacter
    })
};


export default connect(mapStateToProps)(ChoicePlanets);

