import { jsonStrToNum } from './utils';
import productJson from '../data/products.json';
const products = jsonStrToNum(productJson);

export function checkNutrients(recipe) {
	const recipeNutrients = {
		carbs: null, 
    protein: null, 
    fat: null, 
    calories: null,
    potassium: null,
    fibre: null,
	}
  
	for(let ingredient of recipe.ingredient) {
    for (let [ nutrientName, nutrientAmount] of Object.entries(ingredient)) {
      recipeNutrients[nutrientName] += products[nutrientName] * nutrientAmount;
    }
  }
  
  return recipeNutrients;
}