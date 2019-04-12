import { builtinModules } from "module";

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
	Once the amount of oat flour has been chosen, the whey protein can then be set to fulfill the remaining protein
	requirement of the user. This works because the remaining ingredients have insignifcant protein contents.
	The amount of oil is set in the same way, as only the oat flour and whey protein contain significant amounts of fat.
	The psyllium husk amount is then calculated based on a ratio between required calorie intake and require dietary
	fibre, taking into account the fibre contributed by the oat flour and the whey protein.
	The maltodextrin amount is then chosen to fulfil the user's remaining carbohydrate requirement, taking into account
	the carbohydrates contributed by the oat flour, whey protein and psyllium husks.
	Finally, the potassium gluconate amount is set to fulfill the user's potassium requirements, taking into account
	the potassium contribution of the oat flour and the multivitamin powder.
	The remaining ingredients have fixed values as they are contributing trace micronutrients whose exact value is not
	important provided it's within certain bounds.
*/

const oatBase = 200
const oatMod = 150
const calUpper = 3400
const calLower = 1600
const fibreRatio = 14
const salt = 4.0
const multivitamin = 1.8
const choline = 1.0
const potassiumReq = 2500

const ingredients = {
  oats, whey, maltodextrin, oil, psyllium, salt, multivitamin, choline, potassium ingredient
} 

const ingredient = {
	protein, carbs, fat, fibre, potassium
}

function generateRecipe(macros) {
	const recipe = {
    oats: null,  
    whey: null,
    maltodextrin: null, 
    oil: null, 
    psyllium: null,
    salt: null, 
    multivitamin: null, 
    choline: null,
    potassium: null,
  }

	recipe.salt = salt
	recipe.multivitamin = multivitamin
	recipe.choline = choline
	recipe.oats = oatBase + oatMod*(m.calories-calLower)/(calUpper-calLower)
	recipe.whey = (m.protein - recipe.oats*oats.protein) / whey.protein
	recipe.psyllium = ((m.calories/1000)*fibreRatio - recipe.whey*whey.fibre - recipe.oats*oats.fibre) / psyllium.fibre
	recipe.oil = (m.Fat - recipe.Oats*Oats.Fat - recipe.Whey*Whey.Fat)
	recipe.maltodextrin = (m.Carbs - recipe.oats*oats.carbs - recipe.whey*whey.carbs - recipe.psyllium - psyllium.carbs)
	recipe.potassium = (potassiumReq - recipe.oats*oats.potassium - recipe.multivitamin*multivitamin.potassium)

	return recipe
}

module.exports = {
  generateRecipe,
}