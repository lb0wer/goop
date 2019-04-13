function jsonStrToNum(strIngredients) {
  let numIngredients = {};
  Object.entries(strIngredients).map(([ ingredientName, strNutrientValues ]) => {
    let numNutrientValues = {};
    Object.entries(strNutrientValues).map(([ nutrientName, strValue ]) => {
      let numValue = parseFloat(strValue);
      numNutrientValues[nutrientName] = numValue;
    })
    numIngredients[ingredientName] = numNutrientValues;
  })
  return numIngredients;
}

let jsonIngredients = require('../data/ingredients.json');
let res = jsonStrToNum(jsonIngredients);
console.log(res);

module.exports = {
  jsonStrToNum,
}
