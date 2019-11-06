
import { SET_ENGLISH, SET_FRENCH, SELECT_CHARACTER } from './actionTypes';

const STORE = {
    currentCharacter: "/images/astronaute1.png",
    EN: {
        lang:'EN',
        planets:[],
        choiceCharacter:["Home","Next"],
        language:["ENGLISH","FRENCH"],
        footer:["About us", "Contact us"],
        audio: ["ACTIVATE", "DESACTIVATE"]
    },
    FR: {
        lang:'FR',
        choiceCharacter:["Accueil","Suivant"],
        language:["ANGLAIS","FRANCAIS"],
        footer:["A propos de nous", "Nous contacter"],
        audio: ["ACTIVER", "DESACTIVER"]
    }
};


const rootReducer = (state, action) => {

    let lang = ( state == undefined  ) ? STORE.EN : state.lang;
    let currentCharacter = STORE.currentCharacter;


    switch (action.type) {
        case SET_FRENCH.type: lang = STORE.FR; break;
        case SET_ENGLISH.type: lang = STORE.EN; break;

        case SELECT_CHARACTER.type:
            STORE.currentCharacter = action.character;
            currentCharacter = action.character;
            break;

        default:
            lang = STORE.EN;
            console.log("DEFAUT");
            break;
    }
    
    return {
        lang: lang, 
        currentCharacter: currentCharacter
    };

}


export default rootReducer;