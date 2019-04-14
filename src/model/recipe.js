/*
	recipe.js generates a soylent recipe based on the user's macros.
*/

/*
	GenerateRecipe determines the quantities of each ingredient required to fulfill the user's macronutrient
	requirements.
	The oat flour amount is chosen first as it contains the widest range of nutrients and therefore serves as the base
	of the recipe. The amount is scaled to the user's daily calorie intake from a base amount. The base amount,
	modification amount and upper and lower calorie bounds are chosen semi-arbitrarily to provide a good balance between
	oats and maltodextrin for the sources of carbohydrate; limiting the amount of maltodextrin without prescribing so
	much oats as to cause overdosing of certain micronutrients (especially iron) in the cases of users with
	exceptionally high calorie requirements.
	Once the amount of oat flour has been chosen, the wheyProtein protein can then be set to fulfill the remaining protein
	requirement of the user. This works because the remaining ingredients have insignifcant protein contents.
	The amount of oil is set in the same way, as only the oat flour and wheyProtein protein contain significant amounts of fat.
	The psyllium husk amount is then calculated based on a ratio between required calorie intake and require dietary
	fibre, taking into account the fibre contributed by the oat flour and the wheyProtein protein.
	The maltodextrin amount is then chosen to fulfil the user's remaining carbohydrate requirement, taking into account
	the carbohydrates contributed by the oat flour, wheyProtein protein and psyllium husks.
	Finally, the potassium gluconate amount is set to fulfill the user's potassium requirements, taking into account
	the potassium contribution of the oat flour and the multivitamin powder.
	The remaining ingredients have fixed values as they are contributing trace micronutrients whose exact value is not
	important provided it's within certain bounds.
*/

/* const ingredients = {
  oats, wheyProtein, maltodextrin, oil, psyllium, salt, multivitamin, choline, potassium ingredient
} 
const ingredient = {
	protein, carbs, fat, fibre, potassium
} */

import { jsonStrToNum } from './utils';
import productJson from '../data/products.json';
const products = jsonStrToNum(productJson);

export function createRecipe(macros) {
	const oatBase = 100
	const oatMod = 250
	const calUpper = 3400
	const calLower = 1600
	const fibreRatio = 14
	const salt = 4.0
	const multivitamin = 1.8
	const choline = 1.0
	const potassiumReq = 4700
	
	const recipe = {
    oatFlour: null,  
    wheyProtein: null,
    maltodextrin: null, 
    canolaOil: null, 
    psylliumHusk: null,
    salt: null, 
    multivitamin: null, 
    choline: null,
    potassiumGluconate: null,
  }

	recipe.salt = salt;
  recipe.multivitamin = multivitamin;
  recipe.choline = choline;
  recipe.oatFlour =
    oatBase + (oatMod * ((macros.calories - calLower) / (calUpper - calLower)));
  recipe.wheyProtein = (macros.protein - recipe.oatFlour * products.oatFlour.protein) / products.wheyProtein.protein;
  recipe.psylliumHusk =
    ((macros.calories / 1000) * fibreRatio -
      recipe.wheyProtein * products.wheyProtein.fibre -
      recipe.oatFlour * products.oatFlour.fibre) /
    products.psylliumHusk.fibre;
  recipe.canolaOil = macros.fat - recipe.oatFlour * products.oatFlour.fat - recipe.wheyProtein * products.wheyProtein.fat;
  recipe.maltodextrin =
    macros.carbs -
    (recipe.oatFlour * products.oatFlour.carbs +
    recipe.wheyProtein * products.wheyProtein.carbs +
    recipe.psylliumHusk * products.psylliumHusk.carbs);
  recipe.potassiumGluconate =
    (potassiumReq -
		recipe.oatFlour * products.oatFlour.potassium)/products.potassiumGluconate.potassium
		
	return recipe
}