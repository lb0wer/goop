import React, { Component } from 'react';
import './App.css';
import { Inputs } from './components/inputs/inputs';
import { Outputs } from './components/outputs/outputs';

class App extends Component {

  constructor() {
    super();
    this.state = {
      currentView: 'inputs',
      profile: null,
    }
  }

  setProfileState(profileData) {
    this.setState({
      profile: profileData,
      currentView: 'outputs',
    })
  }

  renderCurrentView() {
    if(this.state.currentView === 'inputs') {
      return <Inputs 
        submitProfileData={this.setProfileState.bind(this)}
      />
    }
    if(this.state.currentView === 'outputs') {
      return <Outputs 
        profileData={this.state.profile}
      />
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Umix</h1>
          {this.renderCurrentView()}
        </header>
      </div>
    );
  }
}

export default App;
