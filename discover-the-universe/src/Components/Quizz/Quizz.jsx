import React, {Component} from 'react';

class Quizz extends Component{
    render(){
        return(
            <div className="quizz dsk-offset-3 dsk-6 tab-offset-2 tab-8 mob-offset-1 mob-10">
                <ul>
                    <li className="questions">Mercure est la planète la plus...</li>
                    <li>Proche du soleil.<input type="checkbox" name="audio" /></li>
                    <li>Loin du soleil.<input type="checkbox" name="audio" /></li>
                </ul>
          
            <div>
                <a href="../../../result">
                    <button className="confirm" type="button">confirm
                    </button>
                </a>
            </div>
            </div>
           
        );
    }
}

export default Quizz;