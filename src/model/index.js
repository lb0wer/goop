//const { profile } = require('./profile');
const { createNutriRequirements } = require('./nutriRequirements');
const { createRecipe } = require('./recipe');

const profile = {
  weight: 75, 
  height: 192,
  bodyFat: 0.12, 
  activityLevel: 1.2, 
  age: 25,  
  gender: 'male', 
  regime: 'maintain', 
}

const macros = createNutriRequirements(profile);
const recipe = createRecipe(macros);

console.log(recipe);



