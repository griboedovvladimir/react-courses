import React, { Component } from 'react';
import './App.scss';
import Menu from "./menu/Menu";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Menu/>
        </header>
      </div>
    );
  }
}

export default App;
