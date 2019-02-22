import React, { Component } from 'react';
import './App.css';
import User from './components/User';
import Header from './layout/Header';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header branding="Say Hello App"></Header>
          <div className="container">
            <User></User>
          </div>        
        </div>
      </Router>    
    );
  }
}

export default App;
