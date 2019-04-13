import React, { Component } from 'react';

export class Macros extends Component {

  render() {
    return (
      <div>
        <h1>Macros</h1>
        <p>{JSON.stringify(this.props.macrosData, null, 2)}</p>
      </div>
    )
  }
}