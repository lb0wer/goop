import React, { Component } from 'react';
import { ProfileInputs } from './profile-input';

export class Inputs extends Component {
  
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
      <div>
        <h1>Input</h1>
        <ProfileInputs/>
      </div>
    );
  }
}