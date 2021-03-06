import React, { Component } from 'react';
import './Lienfooter.css';
import '../../../../Grid.css';
import Title from '../../Nav/Title/Title';
import { connect } from 'react-redux';



class LienFooter extends Component {
    render() {
        return (
            <div className="footer mob-12 tab-12 dsk-12 ">
                
                    <div className="row justify-content-center mob-12 tab-4 dsk-4">
                       <h3 className="title-footer">Discovery the universe</h3>
                    </div>

                    <div className="justify-content-center align-center mob-12 tab-4 dsk-4">
                        <ul className="list">
                            <li><a href=""><p className="list-footer">{this.props.lang.footer[0]}</p></a></li>
                            <li><a href=""><p className="list-footer">{this.props.lang.footer[1]}</p></a></li>
                        </ul>
                    </div>

                    <div className="justify-content-center align-center mob-12 tab-4 dsk-4">
                        <ul className="row icon">
                            <li><i className="fab fa-facebook fa-2x"></i></li>
                            <li><i className="fab fa-twitter fa-2x"></i></li>
                            <li><i className="fab fa-instagram fa-2x"></i></li>
                            <li><i className="fab fa-pinterest fa-2x"></i></li>
                        </ul>
                    </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return ({
        lang: state.lang
    })
};

export default connect(mapStateToProps)(LienFooter);
