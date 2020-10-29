import React from "react";
import "./css/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faWhatsapp,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div>
      <nav className="smallnav">
        <div className="smallnav-info">
          <FontAwesomeIcon icon={faClock} />
          <p>MON-FRI 8AM - 7PM</p>
        </div>
        <div className="smallnav-info">
          <FontAwesomeIcon icon={faPhoneVolume} />
          <p>CALL +91 9557860483</p>
        </div>
        <div className="icon">
          <div className="icondesign">
            <FontAwesomeIcon icon={faFacebook} />
          </div>
          <div className="icondesign">
            <FontAwesomeIcon icon={faWhatsapp} />
          </div>
          <div className="icondesign">
            <FontAwesomeIcon icon={faInstagram} />
          </div>
          <div className="icondesign">
            <FontAwesomeIcon icon={faTwitter} />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
