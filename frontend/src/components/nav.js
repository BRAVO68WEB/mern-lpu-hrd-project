import React from "react";
import "./css/nav.css";
import { NavLink } from "react-router-dom";
import banner from "./img/banner.png";
class Nav extends React.Component {
  render() {
    let authuser = sessionStorage.getItem("Key_Veriable");
    if (authuser === "admin@gmail.com") {
      return (
        <nav className="navbar  background">
          <ul className="nav-list ">
            <div className="logo">
              <img src={banner} alt="logo" />
            </div>
            <li>
              <NavLink
                to="/adminafterlogin"
                exact
                activeclassname="active"
                className="listdesign"
              >
                Admin Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/booked-appointments"
                exact
                activeclassname="active"
                className="listdesign"
              >
                All Booked Appointments
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/logout"
                exact
                activeclassname="active"
                className="listdesign"
              >
                Logout
              </NavLink>
            </li>
          </ul>
          <div className="right-nav v-className-resp">
            <input type="text" name="search" id="search" />
            <button className="btn btn-small">Search</button>
          </div>
        </nav>
      );
    } else {
      return (
        <nav className="navbar h-nav-resp background">
          <ul className="nav-list v-className-resp">
            <div className="logo">
              <img src={banner} alt="logo" />
            </div>
            <li>
              <NavLink
                to="/"
                exact
                activeclassname="active"
                className="listdesign"
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/newappointment"
                exact
                activeclassname="active"
                className="listdesign"
              >
                Book a Appointment
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                exact
                activeclassname="active"
                className="listdesign"
              >
                Contact us
              </NavLink>
            </li>
          </ul>
          <div className="right-nav v-className-resp">
            <input type="text" name="search" id="search" />
            <button className="btn btn-small">Search</button>
          </div>
        </nav>
      );
    }
  }
}

export default Nav;
