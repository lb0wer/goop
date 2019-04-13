import React, { Component } from 'react';
import { Macros } from './macros-display';
import { Recipe } from './recipe-display';
import { createRecipe } from '../../model/recipe';
import { createNutriRequirements } from '../../model/nutriRequirements';


export class Outputs extends Component {

  render() {
    let macros = createNutriRequirements(this.props.profileData);
    let recipe = createRecipe(macros);

    return (
      <div>
        <h1>Outputs</h1>
        <Macros macrosData={macros}/>
        <Recipe recipeData={recipe}/>
      </div>
    )
  }
}