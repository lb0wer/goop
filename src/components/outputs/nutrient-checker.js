import React, { Component } from 'react';
import { checkNutrients } from '../../model/check-nutrients';

export class NutrientChecker extends Component {

  getMacrosRows(totalNutrients) {
    return Object.entries(this.props.nutrientData).map( ([ macro, targetAmount ], i) => {
      return this.getMacrosRow(macro, targetAmount, totalNutrients[macro], i);
    })
  }

  getMacrosRow(macro, targetAmount, recipeAmount, i) {
    return (
      <tr key={i}>
        <td scope="row">{macro}</td>
        <td>{Math.round(targetAmount)}</td>
        <td>{Math.round(recipeAmount)}</td>
      </tr>
    )
  }

  render() {
    let totalNutrients = checkNutrients(this.props.recipeData);
    return (
      <div>
        <h2>NutrientChecker</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Macros</th>
              <th scope="col">Your Target Amount</th>
              <th scope="col">Recipe Amount</th>
            </tr>
          </thead>
          <tbody>
            {this.getMacrosRows(totalNutrients)}
          </tbody>
        </table>
      </div>
    )
  }
}