import React from 'react';
import { Redirect} from "react-router-dom";

class Logout extends React.Component
{
    render()
    {
      let authuser = sessionStorage.getItem('Key_Veriable')
      console.log(authuser)
      if (authuser === "admin@gmail.com")
      {
        sessionStorage.removeItem('Key_Veriable')
        return(<Redirect to="/" />)
      }
    }
}

export default Logout