import React, { Component } from 'react';
 import LinkButton from '../LinkButton';
 import NavBar from '../HomePage/Nav/NavBar';
 import "./ChoiceCharacter.css";
 import "../../Grid.css";





 class ChoiceCharacter extends Component {
     constructor(){
        super();

        this.state = {
             userInput:''
         }
     }


     handleChange(event){
         this.setState({
             userInput:event.target.value
         })
    }

    render() {
         return (
             <div className="CharacterPage">
                 <NavBar />
                
                 <div className="container-elements mob-6 tab-6 dsk-6">
                     <p>
                         <input
                         placeholder="Nickname"
                        value={this.state.userInput}
                         onChange={this.handleChange.bind(this)}>
                         </input>
                     </p>
                 <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel"> 
                     <div class="carousel-inner">
                         <div class="carousel-item active" data-interval="1000">
                             <img src="https://files.slack.com/files-pri/T6SG2QGG2-FPWN0DXKK/astronaute2.png" class="d-block w-100" alt="..."/>
                        </div>

                         <div class="carousel-item" data-interval="1000">
                         <img src="https://files.slack.com/files-pri/T6SG2QGG2-FQ4LC7WCD/astronaute1.png" class="d-block w-100" alt="..."/>
                         </div>

                         <div class="carousel-item" data-interval="1000">
                         <img src="https://files.slack.com/files-pri/T6SG2QGG2-FPRRSGWQJ/astronaute3.png" class="d-block w-100" alt="..."/>
                         </div>
                     </div>
  
                     <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                         <span class="sr-only">Previous</span>
                     </a>
                     <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                         <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                     </a>
                
                 </div>
                
                    
                    {
                       this.state.userInput != '' ? <p><LinkButton className='btn btn-warning btn-ChoiceCharacter' to='/ChoicePlanets'> NEXT </LinkButton></p> : ''
                    }
                                     <div className="btn">
                     <a href= "/">
                       <button className="btn-Choice" type="button">Home</button>
                   </a>
              
                 </div>

            </div>
            </div>
        )
    }
 }

 export default ChoiceCharacter;