import React, { Component } from 'react';

export class Recipe extends Component {

  getIngredientsRows() {
    return Object.entries(this.props.recipeData).map( ([ ingredient, amount ], i) => {
      return this.getIngredientsRow(ingredient, amount, i);
    })
  }

  getIngredientsRow(ingredient, amount, i) {
    return (
      <tr key={i}>
        <td scope="row">{ingredient}</td>
        <td>{amount}</td>
      </tr>
    )
  }

  render() {
    return (
      <div>
        <h1>Recipe</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Ingredient</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            {this.getIngredientsRows()}
          </tbody>
        </table>
      </div>
    )
  }
}