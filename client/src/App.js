import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';
import BubblePage from './components/BubblePage';
import Login from "./components/Login";
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
      <ul className="links">
        <li>
        <Link to="/">Login</Link>
        </li>
        <li>
        <Link to="/private">Private Page</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/" component={Login} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated.
        */}
        <PrivateRoute path="/private" component={BubblePage}/>
        <Route component={Login}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
