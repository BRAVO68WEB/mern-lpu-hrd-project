import React from 'react';
import './css/nav.css';
import {NavLink} from 'react-router-dom'
class Nav extends React.Component{
    render(){
      let authuser = sessionStorage.getItem('Key_Veriable');
        if (authuser === "admin@gmail.com")
        {
          return(
            <nav className="navbar  background">
            <ul className="nav-list ">
                <div className="logo">
                    <img src="http://medicare.bold-themes.com/general-hospital/wp-content/uploads/sites/14/2018/03/general-hospital-logo-color.png" alt="logo" />
                </div>
                <li><NavLink to ="/adminafterlogin" exact activeclassNameName="active" className= "listdesign">Admin Home</NavLink></li>
                <li><NavLink to ="/patientdetails" exact activeclassNameName="active" className= "listdesign">Patient Details</NavLink></li>
                <li><NavLink to ="search" exact activeclassNameName="active" className= "listdesign">Search</NavLink></li>
                <li><NavLink to ="/logout" exact activeclassNameName="active" className= "listdesign">Logout</NavLink></li>
            </ul>
            <div className="right-nav v-className-resp">
                <input type="text" name="search" id="search" />
                <button className="btn btn-small">Search</button>
            </div>
        </nav>
          )
  
        }
        else
        {
          return(
            <nav className="navbar h-nav-resp background">
            <ul className="nav-list v-className-resp">
                <div className="logo">
                    <img src="http://medicare.bold-themes.com/general-hospital/wp-content/uploads/sites/14/2018/03/general-hospital-logo-color.png" alt="logo" />
                </div>
                <li><NavLink to ="/" exact activeclassNameName="active" className= "listdesign">Home</NavLink></li>
                <li><NavLink to ="/department" exact activeclassNameName="active" className= "listdesign">Department</NavLink></li>
                <li><NavLink to ="/newappointment" exact activeclassNameName="active" className= "listdesign">New Appointment</NavLink></li>
                <li><NavLink to ="/doctors" exact activeclassNameName="active" className= "listdesign">Doctors</NavLink></li>
                <li><NavLink to ="/contact" exact activeclassNameName="active" className= "listdesign">Contact us</NavLink></li>
            </ul>
            <div className="right-nav v-className-resp">
                <input type="text" name="search" id="search" />
                <button className="btn btn-small">Search</button>
            </div>
        </nav>
          )
        }
    }
}

export default Nav