import React from "react";
import {BrowserRouter as Router ,Route ,Switch} from 'react-router-dom'
import Home from './components/home';
import Nav from './components/nav'

function App() {
  return (
    <div>
      <Router>
        <Nav></Nav>
        <Switch>
      <Route exact path = "/" component = {Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
