import React from 'react';
import { Route, Switch, Link } from "react-router-dom";
import Home from './Components/Home';
import CTF from './Components/CTF';
import MrRobot from './Components/Write-ups/MrRobot';
import Dictionary from './Components/Dictionary';
import './Styles/main.css';

function App() {
  return (
    <div className="App">
    
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        
        <Link className="navbar-brand" to="/">ross-dashboard</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/CTF">CTF</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Dictionary">Dictionary</Link>
            </li>
          </ul>
        </div>
        
          
      </nav>

      
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/CTF">
          <CTF />
        </Route>
        <Route path="/Dictionary">
          <Dictionary />
        </Route>
               
        <Route path="/MrRobot">
            <MrRobot />
        </Route>
        <Route path="/PickleRick">
            <MrRobot />
        </Route>
        <Route path="/RootMe">
            <MrRobot />
        </Route>
        <Route path="/Retro">
            <MrRobot />
        </Route>

        
        
      </Switch>
      
    </div>
  );
}

export default App;

