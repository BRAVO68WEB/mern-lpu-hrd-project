import React from "react";
import Navbar from "./nav";
import "./css/basic.css";
class Contact extends React.Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <h1 className="message">For any Medical Query ...</h1>
        <h2 className="message">Call us at any time</h2>
        <br />
        <h3 className="message">
          Email Us at :{" "}
          <i>
            <a href="mailto:team@medicare.com">team@medicare.com</a>
          </i>
        </h3>
        <br />
        <h3 className="message">OR</h3>
        <br />
        <h3 className="message">Call Us at : +1234567890</h3>
      </div>
    );
  }
}

export default Contact;
