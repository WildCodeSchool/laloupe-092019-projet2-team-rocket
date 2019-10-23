import React from 'react';
import Etat1 from './Etat/Etat1';
import Etat2 from './Etat/Etat2';
import Etat3 from './Etat/Etat3';
import Etat4 from './Etat/Etat4';

import './State.css';

function State() {
    
    return(
        <div className="row col-6">
            <Etat1 />
            <Etat2 />
            <Etat3 />
            <Etat4 />
        </div>
    );
}

export default State;