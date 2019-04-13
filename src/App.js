import React, { Component } from 'react';
import './App.css';
import { Inputs } from './components/inputs/inputs';

class App extends Component {

  constructor() {
    super();
    this.state = {
      userProfile: null,
			macros: null,
			recipe: null,
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
         <h1>Goop</h1>
         <Inputs/>
        </header>
      </div>
    );
  }
}

export default App;
