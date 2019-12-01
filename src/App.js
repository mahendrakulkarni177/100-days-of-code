import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import './App.css';
import Home from './component/home'
import DropDown from './component/dropdown'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        #100DaysOfCode
      </header>
      <Router>
      <div className="router-container">
        <Route exact path={'/'} render={(props) => <Home props={props}/>}/>
        <Route exact path={'/dropDown'} render={(props) => <DropDown props={props}/>}/>
      </div>
    </Router>
    </div>
  );
}

export default App;
