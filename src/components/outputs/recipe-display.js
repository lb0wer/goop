import React, { Component } from 'react';

export class Recipe extends Component {

  render() {
    return (
      <div>
        <h1>Recipe</h1>
        <p>{JSON.stringify(this.props.recipeData, null, 2)}</p>
      </div>
    )
  }
}