
import { SET_ENGLISH, SET_FRENCH, SET_CHARACTER } from './actionTypes';

const STORE = {
    character:{
        selected:["",""]
    },
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

    switch (action.type) {
        case SET_FRENCH.type:
            state = STORE.FR;
            break;

        case SET_ENGLISH.type:
            state = STORE.EN;
            break;

        case SET_CHARACTER.type:
            console.log(SET_CHARACTER.type);
            break;

        default:
            state = STORE.EN;
            break;
    }

    return state;

}


export default rootReducer;