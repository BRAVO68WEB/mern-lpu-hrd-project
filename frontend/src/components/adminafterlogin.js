import React from 'react'
import Navbar from './nav'
import './css/basic.css'
import { Redirect} from "react-router-dom";

class AdminAfterLogin extends React.Component
{
    render()
    {
      let authuser = sessionStorage.getItem('Key_Veriable')
      console.log(authuser)
      if (authuser == null)
      {
        return(<Redirect to="/adminLogin" />)
      }
      else
      {
        return(
          <div>
              <Navbar></Navbar>
             <br/>
             <h3 className= "message">WELCOME ADMIN</h3>
             <h3 className= "message">THIS IS ADMIN DASH BOARD</h3>      
          </div>
              )
      }
    }
}

export default AdminAfterLogin