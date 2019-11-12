
import { SET_ENGLISH, SET_FRENCH, SELECT_CHARACTER, SELECT_PLANET, SELECT_REFERENCE_PLANET_EARTH} from './actionTypes';

const STORE = {
    currentCharacter: "/images/astronaute1.png",
    earth_reference_infos:null,
    currentPlanet:{},
    EN: {
        lang:'EN',
        planets:[],
        choiceCharacter:["Home","Next","Choice your nickname", "Choice your character","previous"],
        language:["ENGLISH","FRENCH"],
        setting:["Click here to access the settings"],
        launcherButton:["Get Started"],
        footer:["About us", "Contact us"],
        audio: ["ACTIVATE", "DESACTIVATE"],
        choiceCharacterPlaceholder:["nickname"],
        choicePlanet:["Select your planet"],
        choiceMars:["Mars","Do you want to explore the red planet?"],
        choiceVenus:["Venus","Do you want to explore Venus ?"],
        choiceJupiter:["Jupiter","Do you want to explore Jupiter?"],
        choiceUranus:["Uranus","Do you want to explore Uranus?"]
    },
    FR: {
        lang:'FR',
        choiceCharacter:["Accueil","Suivant","Indique ton pseudo", "Selectionne ton personnage","précédent"],
        language:["ANGLAIS","FRANCAIS"],
        setting:["Cliquez ici pour accéder aux paramètres"],
        launcherButton:["Commencer"],
        footer:["A propos de nous", "Nous contacter"],
        audio: ["ACTIVER", "DESACTIVER"],
        choiceCharacterPlaceholder:["pseudo"],
        choicePlanet:["Sélectionne la planète"],
        choiceMars:["Mars","Veux-tu explorer la planète rouge ?"],
        choiceVenus:["Venus","Veux-tu explorer Venus ?"],
        choiceJupiter:["Jupiter","Veux-tu explorer Jupiter ?"],
        choiceUranus:["Uranus","Veux-tu explorer Uranus?"]
    }
};


const rootReducer = (state, action) => {

    let lang = ( state == undefined  ) ? STORE.EN : state.lang;
    let currentCharacter = STORE.currentCharacter;
    let currentPlanet = STORE.currentPlanet;
    let earth_reference_infos = STORE.earth_reference_infos;


    switch (action.type) {
        case SET_FRENCH.type: lang = STORE.FR; break;
        case SET_ENGLISH.type: lang = STORE.EN; break;

        case SELECT_CHARACTER.type:
            
            STORE.currentCharacter = action.character;
            currentCharacter = action.character;
            break;

        case SELECT_PLANET.type:
            STORE.currentPlanet = action.planet;
            /*console.log(action.planet);*/
            break;
        
        case SELECT_REFERENCE_PLANET_EARTH.type:
            STORE.earth_reference_infos = action.earth;
            /*console.log(action.earth);*/
            break;

        default:
            lang = STORE.EN;
            break;
    }
    return {
        lang: lang, 
        currentCharacter: currentCharacter,
        currentPlanet: currentPlanet,
        earth_reference_infos : earth_reference_infos
    };

}


export default rootReducer;