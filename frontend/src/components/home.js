import React from "react";
import "./css/home.css";
import logo from "./img/logo.png";
import Navbar from "./nav";

class Home extends React.Component {
  constructor(props) {
    super();
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    e.preventDefault();
    this.props.history.push("/adminLogin");
  }

  render() {
    return (
      <div>
        <Navbar></Navbar>
        <div className="firstSection background">
          <div className="main-box">
            <div className="firstHalf">
              <p className="text-big">Your doctor your treatment</p>
              <div className="text-small">
                Proactively envisioned multimedia based expertise and
                cross-media growth strategies. Seamlessly visualize quality
                intellectual capital without superior collaboration and
                idea-sharing.
                <div className="buttons">
                  <button className="btn" onClick={this.onClick}>
                    Admin Sign in
                  </button>
                </div>
              </div>
            </div>
            <div className="secondHalf">
              <img src={logo} alt="logoImage" />
            </div>
          </div>
        </div>
        <section className="section">
          <div className="para">
            <p className="sectionTag text-big">Health care</p>
            <p className="sectionSubTag text-small">
              For all your family needs
            </p>
            <p className="sectionSubTag text-small">
              Efficiently unleash cross-media information without cross-media
              value. Quickly maximize timely deliverables for real-time schemas.
              Dramatically maintain clicks-and-mortar solutions without
              functional solutions.
            </p>
          </div>

          <div className="thumbnail">
            <img
              src="https://source.unsplash.com/900x900/?Health,doctor"
              alt="Laptop"
            />
          </div>
        </section>
        <section className="section section-left">
          <div className="para">
            <p className="sectionTag text-big">Dentist</p>
            <p className="sectionSubTag text-small">
              For your child whitest teeths
            </p>
            <p className="sectionSubTag text-small">
              Completely synergize resource taxing relationships via premier
              niche markets. Professionally cultivate one-to-one customer
              service with robust ideas. Dynamically innovate resource-leveling
              customer service for state of the art customer service.
            </p>
          </div>
          <div className="thumbnail">
            <img
              src="https://source.unsplash.com/900x900/?Dentist"
              alt="Laptop"
            />
          </div>
        </section>
        <section className="section">
          <div className="para">
            <p className="sectionTag text-big">Pediatrician</p>
            <p className="sectionSubTag text-small">Children medical care</p>
            <p className="sectionSubTag text-small">
              Objectively innovate empowered manufactured products whereas
              parallel platforms. Holisticly predominate extensible testing
              procedures for reliable supply chains. Dramatically engage
              top-line web services vis-a-vis cutting-edge deliverables.
            </p>
          </div>

          <div className="thumbnail">
            <img
              src="https://source.unsplash.com/900x900/?Pediatrician"
              alt="Laptop"
            />
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
