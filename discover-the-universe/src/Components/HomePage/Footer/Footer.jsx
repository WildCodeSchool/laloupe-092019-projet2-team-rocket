import React, {Component} from 'react';
import LienFooter from './LienFooter/LienFooter';
import './Footer.css';
import '../../../Grid.css';


class Footer extends Component {
  
    render() { 
        return (
            <div>
               <LienFooter className="footer" />
            </div>
         );
    }
}
 
export default Footer;