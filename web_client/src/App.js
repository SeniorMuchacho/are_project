import React, { Component } from 'react';
import './App.css';
import NavBar from "./components/NavBar";

class App extends Component {
  render() {
    return (
      <div className="app-container">
      <NavBar/> <div className="mcontent">{this.props.children}</div>{" "}
      </div>
    );
  }
}

export default App;
