import React, { Component } from 'react';
import $ from "jquery";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React - Hey</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="row">
          <label className="col-sm-6">teste</label>
          <label className="col-sm-6">teste 2</label>
          <div className="col-sm-6">
           <button type="button" className="btn btn-primary">teste </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
