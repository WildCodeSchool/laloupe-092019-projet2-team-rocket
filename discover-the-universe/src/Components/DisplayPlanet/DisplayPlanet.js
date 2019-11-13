import React, {Component} from 'react';
import { connect } from 'react-redux';
import NavBar from '../HomePage/Nav/NavBar';


const TERRE = {
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


const urlPicture = {
    Mars:"https://www.presse-citron.net/wordpress_prod/wp-content/uploads/2018/07/mars-robot-1.jpg",
    Venus:"https://www.presse-citron.net/wordpress_prod/wp-content/uploads/2018/07/mars-robot-1.jpg",
    Jupiter:"https://www.presse-citron.net/wordpress_prod/wp-content/uploads/2018/07/mars-robot-1.jpg",
    Uranus:"https://www.presse-citron.net/wordpress_prod/wp-content/uploads/2018/07/mars-robot-1.jpg"
 }


class DisplayPlanet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            planet: this.props.currentPlanet,
            picture:this.props.currentPlanetPicture,
            threeMoons: {},
            urlpicture: urlPicture
        }
    }


    displayAllMoons = () => {
        let moons = this.state.planet.moons;
        let lune = moons.map(lune => lune.moon);
        let lune2 = lune + " ";
        return (
            lune2
        );
    }
    displayThreeMoons = () =>{
        let allMoons = this.state.planet.moons ;
        let pos = 3 ;
        let n = this.state.planet.moons.length - 3;
        let removeMoons =allMoons.splice(pos, n);
        let threeMoons = removeMoons + " ";
        this.setState({
            threeMoons: threeMoons
        })
    }

 
    render() {

        return (
            <div className="">
                <NavBar />
                <div className="mars mob-12 row">
                    <div className="mob-6"></div>
                    <div className="mob-6">

                        {this.state.planet.length === 0 ? <p>loading</p> : <img className="mob-6 tab-12 dsk-10" src={this.state.picture} alt="Picture of mars" ></img>}
                    </div>
                </div>

                <div className="mob-12 ">
                    <img className="mob-12 font-avatar" src={urlPicture[this.state.planet.name]} alt="font-mars" />
                    {this.state.planet.length === 0 ? <p>loading</p> : <p className="bull" >Welcome to {this.state.planet.name}</p>}
                    <img className="mob-12" src={this.props.currentCharacter} alt="avatar" />
                </div>
                <div className="">
                    {this.state.planet.length === 0 ? <p>loading</p> :
                        <p>
                    {this.state.planet.name} est une planète de notre système solaire.
                    {this.state.planet.name} a une masse
                    {this.state.planet.mass.massValue > TERRE.mass.massValue ? ' plus grande' : ' plus petite'} que celle de la terre, ce qui veut dire qu'elle est
                    {this.state.planet.mass.massValue > TERRE.mass.massValue ? ' plus lourde' : ' plus légère'} que la terre.
                    {this.state.planet.name} a un volume de
                    {this.state.planet.vol.volValue} kg/m³, ce qui veut dire qu'elle est
                    {this.state.planet.vol.volValue > TERRE.vol.volValue ? ' plus grande' : ' plus petite'} que la Terre.
                    {this.state.planet.moons.length === 0 ? "Cette planet na pas de lune" :
                    `Elle possède ${this.state.planet.moons.length}
                    ${this.state.planet.moons.length > 0 ? ' satellites' : ' satellite'} :
                    ${this.state.planet.moons.length <= 3 ? this.displayAllMoons() : this.displayThreeMoons() }. La gravité est de ${this.state.planet.gravity} et est
                    ${this.state.planet.gravity > TERRE.gravity ? ' plus grande' : ' plus petite'} que celle de la terre. Ce qui veut dire que tu seras ${this.state.planet.gravity > TERRE.gravity ? ' plus lourd' : ' plus leger'} que sur la terre.`}</p>}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {

    return ({
        lang: state.lang,
        currentCharacter: state.currentCharacter,
        currentPlanet:state.currentPlanet,
        earth_reference_infos:state.earth_reference_infos,
        currentPlanetPicture:state.currentPlanetPicture
    })
};


export default connect(mapStateToProps)(DisplayPlanet);
