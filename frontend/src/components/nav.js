import React from 'react';
import './css/nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faWhatsapp,faInstagram,faTwitter } from '@fortawesome/free-brands-svg-icons'
import {Link} from 'react-router-dom'


function Nav(){
    return (
        <div>
            <nav class="smallnav">
                <div class="smallnav-info">
                    <i class="fa fa-clock-o"></i>
                    <p>MON-FRI 8AM - 7PM</p>
                </div>
                <div class="smallnav-info">
                    <i class="fa fa-volume-control-phone"></i>
                    <p>CALL +91 9557860483</p>
                </div>
                <div class="icon">
                    <div class= "icondesign">
                    <FontAwesomeIcon icon={faFacebook}  />
                    </div>
                    <div class= "icondesign">
                    <FontAwesomeIcon icon={faWhatsapp} />
                    </div>
                    <div class= "icondesign">
                    <FontAwesomeIcon icon={faInstagram}  />
                    </div>
                    <div class= "icondesign">
                    <FontAwesomeIcon icon={faTwitter}  />
                    </div>
                </div>
            </nav>
            <nav class="navbar h-nav-resp background">
                <ul class="nav-list v-class-resp">
                    <div class="logo">
                        <img src="http://medicare.bold-themes.com/general-hospital/wp-content/uploads/sites/14/2018/03/general-hospital-logo-color.png" alt="logo" />
                    </div>
                    <li><Link to ="/" class= "listdesign">Home</Link></li>
                    <li><Link to ="/Department" class= "listdesign">Department</Link></li>
                    <li><Link to ="/New Appointement" class= "listdesign">New Appointement</Link></li>
                    <li><Link to ="/Doctors" class= "listdesign">Doctors</Link></li>
                    <li><Link to ="/Contact us" class= "listdesign">Contact us</Link></li>
                </ul>
                <div class="right-nav v-class-resp">
                    <input type="text" name="search" id="search" />
                    <button class="btn btn-small">Search</button>
                </div>
            </nav>
        </div>
    );
}

export default Nav