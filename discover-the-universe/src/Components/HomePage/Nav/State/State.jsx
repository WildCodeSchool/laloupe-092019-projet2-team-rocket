import React from 'react';
import Etat1 from './Etat/Etat1';
import Etat2 from './Etat/Etat2';
import Etat3 from './Etat/Etat3';
import Etat4 from './Etat/Etat4';
import '../Grid.css';
import './State.css';

function State() {
    
    return(
        <div className="align-center margin">
            <div className="mob-2 tab-2 dsk-0 height"></div>
            <div className="mob-2 tab-2 dsk-2 align-center">    
            <Etat1 />
            </div>
            <div className="mob-2 tab-2 dsk-2 align-center">
            <Etat2 />
            </div>
            <div className="mob-2 tab-2 dsk-2 align-center">
            <Etat3 />
            </div>
            <div className="mob-2 tab-2 dsk-2 align-center">
            <Etat4 />
            </div>
            <div className="mob-2 tab-2 dsk-0 height"></div>
        </div>
    );
}

export default State;