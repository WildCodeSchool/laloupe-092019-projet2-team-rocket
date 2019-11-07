import React from 'react';
import axios from 'axios';
import './Venus.css'
import '../../../../Grid.css'
import NavBar from '../../../HomePage/Nav/NavBar';
import { connect } from 'react-redux';

const terre = {
    id: "terre",
    name: "La Terre",
    englishName: "Earth",
    moons: [
        {
            moon: "La Lune",
            rel: "https://api.le-systeme-solaire.net/rest/bodies/lune"
        }
    ],
    mass: {
        massValue: 5.97237,
    },
    vol: {
        volValue: 1.08321,
    },
    density: 5.5136,
    gravity: 9.8,
};

class Venus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            img: [],
            planet: []
        }
    }

    getImage = () => {
        axios.get(`https://images-api.nasa.gov/asset/PIA00104`)
            .then(response => response.data)
            .then(data => {
                console.log('1', data);
                this.setState({
                    img: data
                });
            })
    }

    getMars = () => {
        axios.get(`https://api.le-systeme-solaire.net/rest/bodies/venus`)
            .then(response => response.data)
            .then(data => {
                console.log('2', data);
                this.setState({
                    planet: data
                });
            })
    }

    displayMoons = () => {
        let moons = this.state.planet.moons;
        let lune = moons.map(lune => lune.moon);
        console.log(lune)
        let lune2 = lune + " "
        return (
            lune2
        );
    }

    componentDidMount() {
        this.getImage();
        this.getMars();
    }

    render() {
        return (
            <div className="">
            <NavBar />
            <div className="mars mob-12 row">
                <div className="mob-6"></div>
                <div className="mob-6">

                    {this.state.img.length === 0 ? <p>loading</p> : <img className="mob-6 tab-12 dsk-10" src={this.state.img.collection.items[1].href} alt="Picture of mars" ></img>}
                </div>
            </div>

            <div className="mob-12 ">
                <img className="mob-12 font-avatar" src="https://mars.nasa.gov/system/resources/detail_files/8727_PIA02406-full2.jpg" alt="font-mars" />
                {this.state.planet.length === 0 ? <p>loading</p> : <p className="bull" >Welcome to {this.state.planet.name}</p>}
                <img className="mob-12" src={this.props.currentCharacter} alt="avatar" />
            </div>
            <div className="">
            {this.state.planet.length === 0 ? <p>loading</p> :
                <p>
                {this.state.planet.name} est une planète de notre système solaire.
                {this.state.planet.name} a une masse 
                {this.state.planet.mass.massValue > terre.mass.massValue ? ' plus grande' : ' plus petite'} que celle de la terre, ce qui veut dire qu'elle est 
                {this.state.planet.mass.massValue > terre.mass.massValue ? ' plus lourde' : ' plus légère'} que la terre.
                {this.state.planet.name} a un volume de 
                {this.state.planet.vol.volValue} kg/m³, ce qui veut dire qu'elle est 
                {this.state.planet.vol.volValue > terre.vol.volValue ? ' plus grande' : ' plus petite'} que la Terre. 
                {/* Elle possède {this.state.planet.moons.length}  */}
                {/* {this.state.planet.moons.length === null || > 0  ? ' satellites' : ' satellite'} :   */}
                {/* {this.state.planet.moons.length === 0 ? '' : this.displayMoons()}. La gravité est de {this.state.planet.gravity} et est  */}
                {this.state.planet.gravity > terre.gravity ? ' plus grande' : ' plus petite'} que celle de la terre. Ce qui veut dire que tu seras {this.state.planet.gravity > terre.gravity ? ' plus lourd' : ' plus leger'} que sur la terre.</p>}
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

export default connect(mapStateToProps)(Venus);