import React from 'react';
import Navbar from './nav'
import './css/basic.css'

class Contact extends React.Component {
    render(){
        return(
            <div>
                <Navbar></Navbar>
                <h1 className= "message">This is Contact us Page</h1>
            </div>
        );
    }
}

export default Contact