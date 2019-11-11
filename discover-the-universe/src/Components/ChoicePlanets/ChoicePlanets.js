import React, { Component, Fragment } from 'react';
import NavBar from '../HomePage/Nav/NavBar';
import { connect } from 'react-redux';
import './ChoicePlanets.css';
import LinkButton from '../LinkButton';
import SliderPlanets from './SliderPlanets';
import { UncontrolledCarousel } from 'reactstrap';




class ChoicePlanets extends Component {
    constructor() {
        super();
        this.state = {
            mars:"",
            venus:"",
            jupiter:"",
            uranus:""
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
                })
                this.items[0].src = this.state.mars;
                this.items[0].header = this.props.lang.choiceMars[0];
                this.items[0].caption = this.props.lang.choiceMars[1];
            })

           
    }

    getVenus() {
        fetch('https://images-api.nasa.gov/search?q=venus')
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    venus: data.collection.items[28].links[0].href
                })
                this.items[1].src = this.state.venus; 
                this.items[1].header = this.props.lang.choiceVenus[0];
                this.items[1].caption = this.props.lang.choiceVenus[1];
            })
    }

    getJupiter() {
        fetch('https://images-api.nasa.gov/search?q=jupiter')
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    jupiter: data.collection.items[60].links[0].href
                })
                this.items[2].src = this.state.jupiter;
                this.items[2].header = this.props.lang.choiceJupiter[0];
                this.items[2].caption = this.props.lang.choiceJupiter[1];
            })
    }

    getUranus() {
        fetch('https://images-api.nasa.gov/search?q=uranus')
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    uranus: data.collection.items[3].links[0].href
                })
                this.items[3].src = this.state.uranus; 
                this.items[3].header = this.props.lang.choiceUranus[0];
                this.items[3].caption = this.props.lang.choiceUranus[1];
            })
    }


    items = [
        {
          src:"",
          altText: "altText",
          caption: "caption",
          header: "header",
          key: '1'
        },
        {
          src:"",
          altText: 'Slide 2',
          caption: 'Slide 2',
          header: 'Slide 2 Header',
          key: '2'
        },
        {
          src:"",
          altText: 'Slide 3',
          caption: 'Slide 3',
          header: 'Slide 3 Header',
          key: '3'
        },
        {
            src:"",
            altText: 'Slide 4',
            caption: 'Slide 4',
            header: 'Slide 4 Header',
            key: '4'
            }
      ]

    render() {



        return (
            <Fragment>
                <NavBar />
                <div className="container">
                    <h3>{this.props.lang.choicePlanet[0]}</h3>
                    {/*<div className="astronaute">
                        <img className="choicePlanetAstronaute" src={`${this.props.currentCharacter}`} />
                    </div>*/}
                   {/* <div className="planets">
                        <div className="planet1"><LinkButton className="btn-planet1" to="/"> <img className="pics-planet" src={`${this.state.mars}`} alt="mars" /></LinkButton></div>
                        <div className="planet1"><LinkButton className="btn-planet1" to="/"> <img className="pics-planet" src={`${this.state.mars}`} alt="mars" /></LinkButton></div>
                        <div className="planet1"><LinkButton className="btn-planet1" to="/"> <img className="pics-planet" src={`${this.state.mars}`} alt="mars" /></LinkButton></div>
                        <div className="planet1"><LinkButton className="btn-planet1" to="/"> <img className="pics-planet" src={`${this.state.mars}`} alt="mars" /></LinkButton></div>
                    </div>*/}
                    
                    <div className="carousel-planet">
                        <UncontrolledCarousel items={this.items} slide={true} interval={false}/>
                    </div>
                    <div className="row justify-content-center">
                        <LinkButton className="btn btn-success btn-ChoiceCharacter" to="/ChoiceCharacter">{this.props.lang.choiceCharacter[4]}</LinkButton>
                        <LinkButton className="btn btn-success btn-ChoiceCharacter" to="/">{this.props.lang.choiceCharacter[1]}</LinkButton>
                    </div>
                   
                </div>
            </Fragment>
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

