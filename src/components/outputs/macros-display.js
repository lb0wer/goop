import React, { Component } from 'react';

export class Macros extends Component {

  getMacrosRows() {
    return Object.entries(this.props.macrosData).map( ([ macros, amount ], i) => {
      return this.getMacrosRow(macros, amount, i);
    })
  }

  getMacrosRow(macros, amount, i) {
    return (
      <tr key={i}>
        <td scope="row">{macros}</td>
        <td>{amount}</td>
      </tr>
    )
  }

  render() {
    return (
      <div>
        <h1>Macros</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Macros</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            {this.getMacrosRows()}
          </tbody>
        </table>
      </div>
    )
  }
}