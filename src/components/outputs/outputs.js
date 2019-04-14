import React, { Component } from 'react';
import { Macros } from './macros-display';
import { Recipe } from './recipe-display';
import { NutrientChecker } from './nutrient-checker';
import { createRecipe } from '../../model/recipe';
import { createNutriRequirements } from '../../model/nutri-requirements';


export class Outputs extends Component {

  render() {
    let macros = createNutriRequirements(this.props.profileData);
    let recipe = createRecipe(macros);

    return (
      <div>
        <Macros macrosData={macros}/>
        <Recipe recipeData={recipe}/>
        <NutrientChecker/>
      </div>
    )
  }
}