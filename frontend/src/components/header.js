import React from 'react'
import './css/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faWhatsapp,faInstagram,faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons'

function Header(){
    return(
        <div>
            <nav class="smallnav">
          <div class="smallnav-info">
                <FontAwesomeIcon icon={faClock}  />
                <p>MON-FRI 8AM - 7PM</p>
          </div>
          <div class="smallnav-info">
          <FontAwesomeIcon icon={faPhoneVolume} />
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
        </div>
    );
}

export default Header