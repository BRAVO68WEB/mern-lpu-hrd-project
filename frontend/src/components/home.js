import React from 'react';
import './css/home.css';
import logo from './img/logo.png'
import Navbar from './nav'


class Home extends React.Component{

    constructor(props){
        super();
        this.onClick=this.onClick.bind(this);
    }

    onClick(e){
        e.preventDefault();
        this.props.history.push('/adminLogin')
    }

    render(){

        return(
            <div>
            <Navbar></Navbar>
                <div class="firstSection background">
                    <div class="main-box">
                        <div class="firstHalf">
                            <p class="text-big">Your doctor your treatment</p>
                            <div class="text-small">
                                Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing.
                                <div class="buttons">
                                    <button class="btn" onClick={this.onClick}>Admin Sign in</button>
                                </div>
                            </div>
                        </div>
                        <div class="secondHalf">
                            <img src={logo} alt="logoImage" />
                        </div>
                    </div>
                </div>
                <section class="section">
                    <div class="para">
                        <p class="sectionTag text-big">Health care</p>
                        <p class="sectionSubTag text-small">
                            
                            For all your family needs
                        </p>
                        <p class="sectionSubTag text-small">
                            Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions.
                        </p>
                    </div>

                    <div class="thumbnail">
                        <img src="https://source.unsplash.com/900x900/?Health,doctor" alt="Laptop" />
                    </div>
                </section>
                <section class="section section-left">
                    <div class="para">
                        <p class="sectionTag text-big">Dentist</p>
                        <p class="sectionSubTag text-small">   
                            For your child whitest teeths
                        </p>
                        <p class="sectionSubTag text-small">
                            Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.
                        </p>
                    </div>
                    <div class="thumbnail">
                        <img src="https://source.unsplash.com/900x900/?Dentist" alt="Laptop" />
                    </div>
                </section>
                <section class="section">
                    <div class="para">
                        <p class="sectionTag text-big">Pediatrician</p>
                        <p class="sectionSubTag text-small">
                            Children medical care
                        </p>
                        <p class="sectionSubTag text-small">
                            Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly predominate extensible testing procedures for reliable supply chains. Dramatically engage top-line web services vis-a-vis cutting-edge deliverables.
                        </p>
                    </div>

                    <div class="thumbnail">
                        <img src="https://source.unsplash.com/900x900/?Pediatrician" alt="Laptop" />
                    </div>
                </section>
             </div>
        );
    }
}

export default Home