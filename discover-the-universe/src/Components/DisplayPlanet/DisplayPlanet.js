import React, {Component} from 'react';
import { connect } from 'react-redux';


class DisplayPlanet extends Component{
    constructor(){
        super();

    }


    display = () => {
        return(
            <div>
                <h1>{this.props.currentPlanet.name}</h1>
                <p>La planète {this.props.currentPlanet.name} se situe dans notre système solaire. </p>
            </div>
        )
    }

 

    render(){
        console.log(this.props.currentPlanet);
        return(
            <div>
                {this.display()}
            </div>
        )
    }
}

const mapStateToProps = state => {

    return ({
        lang: state.lang,
        currentCharacter: state.currentCharacter,
        currentPlanet:state.currentPlanet,
        earth_reference_infos:state.earth_reference_infos
    })
};


export default connect(mapStateToProps)(DisplayPlanet);

/*
{planet} est une planète de notre système solaire.  {planet} a une masse {mars.masse > terre.masse ? : ‘grande’ :’petite’} que celle de la terre, ce qui veut dire qu’elle est {mars.masse > terre.masse ?  ’plus lourde’ :’plus légère’} que la terre.
{planet} a un volume de {mars.volume} kg/m³, ce qui veut dire qu’elle est {mars.volume > terre.volume ? ‘plus grande’ : ’plus petite’}. Elle possède {mars.satellite} {mars.satellite > 0 ? ‘satellites’ : ‘satellite’} :  {afficher les noms des satellites}
La gravité est de {mars.gravity} et est {mars.gravity > terre.gravity ? ‘plus grande’ : ‘plus petite’} que celle de la terre. Ce qui veut dire que tu seras {mars.gravity > terre.gravity ? ‘plus lourd’ : ‘plus leger’} que sur la terre.*/