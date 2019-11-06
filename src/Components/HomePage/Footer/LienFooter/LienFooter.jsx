import React, { Component } from 'react';
import './Lienfooter.css';
import '../../../../Grid.css';
import Logo from '../../Nav/Logo/Logo';
import { connect } from 'react-redux';



class LienFooter extends Component {
    render() {
        return (
            <div className="footer mob-12 tab-12 dsk-12 ">
                
                    <div className="row justify-content-center mob-12 tab-4 dsk-4">
                       <Logo />
                    </div>

                    <div className="justify-content-center align-center mob-12 tab-4 dsk-4">
                        <ul className="list">
                            <li><a href="">{this.props.lang.footer[0]}</a></li>
                            <li><a href="">{this.props.lang.footer[1]}</a></li>
                        </ul>
                    </div>

                    <div className="justify-content-center align-center mob-12 tab-4 dsk-4">
                        <ul className="row icon">
                            <li><i class="fab fa-facebook fa-2x"></i></li>
                            <li><i class="fab fa-twitter fa-2x"></i></li>
                            <li><i class="fab fa-instagram fa-2x"></i></li>
                            <li><i class="fab fa-pinterest fa-2x"></i></li>
                        </ul>
                    </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return ({
        lang: state
    })
};

export default connect(mapStateToProps)(LienFooter);
