import React from 'react';
import axios from 'axios';
import './Mars.css'
import '../../../../Grid.css'
const txtplanets = ``;

class Mars extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            img: [],
            mars: []
        }
    }

    getImage = () => {
        axios.get(`https://images-api.nasa.gov/asset/PIA04591`)
            .then(response => response.data)
            .then(data => {
                console.log('1', data);
                this.setState({
                    img: data
                });
            })
    }

    getMars = () => {
        axios.get(`https://api.le-systeme-solaire.net/rest/bodies/mars`)
            .then(response => response.data)
            .then(data => {
                console.log('2', data);
                this.setState({
                    mars: data
                });
            })
    }

    componentDidMount() {
        this.getImage();
        this.getMars();
    }

    render() {
        return (
            <div className="">
                <div className="mars mob-12 row">
                    <div className="mob-6"></div>
                    <div className="mob-6">

                        {this.state.img.length === 0 ? <p>loading</p> : <img className="mob-6 tab-12 dsk-10" src={this.state.img.collection.items[1].href} alt="Picture of mars" ></img>}
                    </div>
                </div>

                <div className="mob-12 ">
                    <img className="mob-12 font-avatar" src="https://mars.nasa.gov/system/resources/detail_files/8727_PIA02406-full2.jpg" alt="font-mars" />
                    {this.state.mars.length === 0 ? <p>loading</p> : <p className="bull" >Welcome to {this.state.mars.name}</p>}
                    <img className="mob-12" src="./images/astronaute3.png" alt="avatar" />
                </div>
                {/* <p></p> */}
            </div>
        );
    }
}

export default Mars;