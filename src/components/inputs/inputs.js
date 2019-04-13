import React, { Component } from 'react';
import { ProfileInputs } from './profile-input';

export class Inputs extends Component {
  
  constructor() {
    super();
    this.state = {
      profile: null,
			macros: null,
			recipe: null,
    }
  }

  sumbitProfileState(profileData) {
    this.setState({
      profile: profileData,
    })
  }

  render() {
    console.log('inputs', this.state.profile);
    return (
      <div>
        <h1>Input</h1>
        <ProfileInputs submitProfileData={this.sumbitProfileState.bind(this)}/>
      </div>
    );
  }
}
