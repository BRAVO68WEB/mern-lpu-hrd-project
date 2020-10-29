import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home";
import Header from "./components/header";
import Department from "./components/department";
import NewAppointment from "./components/newAppointment";
import Doctors from "./components/doctors";
import Contact from "./components/contact";
import AdminLogin from "./components/adminLogin";
import AdminAfterLogin from "./components/adminafterlogin";
import Logout from "./components/logout";
import Footer from "./components/footer";
import BookedAppointment from "./components/BookedAppointment";

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/newappointment" component={NewAppointment} />
          <Route path="/contact" component={Contact} />
          <Route path="/adminLogin" component={AdminLogin} />
          <Route path="/adminafterlogin" component={AdminAfterLogin} />
          <Route path="/booked-appointments" component={BookedAppointment} />
          <Route path="/logout" component={Logout} />
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
