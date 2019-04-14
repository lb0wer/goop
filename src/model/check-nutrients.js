import { jsonStrToNum } from './utils';
import productJson from '../data/products.json';
const products = jsonStrToNum(productJson);

export function checkNutrients(recipe) {
	const recipeNutrients = {
		carbs: 0, 
    protein: 0, 
    fat: 0, 
    calories: 0,
    potassium: 0,
    fibre: 0,
	}

  for(let ingredientName in recipe) {
    let ingredientAmount = recipe[ingredientName];
    for (let nutrientName in products[ingredientName]) {
      let nutrientPerGram = products[ingredientName][nutrientName];
      recipeNutrients[nutrientName] += nutrientPerGram * ingredientAmount;
    }
  }

  
  return recipeNutrients;
}