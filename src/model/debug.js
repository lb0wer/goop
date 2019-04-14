let products = {
  "wheyProtein": {
    "calories": "4.02",
    "fat": "0.0667",
    "carbs": "0.05",
    "protein": "0.8",
    "potassium": "0",
    "fibre": "0"
  },
  "oatFlour": {
    "calories": "4.035714286",
    "fat": "0.09285714286",
    "carbs": "0.6571428571",
    "protein": "0.1464285714",
    "potassium": "3.714285714",
    "fibre": "0.06428571429"
  },
  "maltodextrin": {
    "calories": "3.82",
    "fat": "0",
    "carbs": "0.94",
    "protein": "0",
    "potassium": "0",
    "fibre": "0"
  },
  "canolaOil": {
    "calories": "8.84",
    "fat": "1",
    "carbs": "0",
    "protein": "0",
    "potassium": "0",
    "fibre": "0"
  },
  "psylliumHusk": {
    "calories": "3.78",
    "fat": "0",
    "carbs": "0.889",
    "protein": "0",
    "potassium": "0",
    "fibre": "0.778"
  },
  "potassiumGluconate": {
    "calories": "0",
    "fat": "0",
    "carbs": "0",
    "protein": "0",
    "potassium": "166.9",
    "fibre": "0"
  }
}

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

products = jsonStrToNum(products);


function checkNutrients(recipe) {
  console.log('MODEL', recipe)
	const recipeNutrients = {
		carbs: 0, 
    protein: 0, 
    fat: 0, 
    calories: 0,
    potassium: 0,
    fibre: 0,
	}
  
	/* 	for(let [ ingredientName, ingredientAmount ] of Object.entries(recipe)) {
    for (let [ nutrientName, nutrientPerGram ] of Object.entries(products[ingredientName])) {
      recipeNutrients[nutrientName] += nutrientPerGram * ingredientAmount;
    }
  } */

  for(let ingredientName in recipe) {
    let ingredientAmount = recipe[ingredientName];
    for (let nutrientName in products[ingredientName]) {
      let nutrientPerGram = products[ingredientName][nutrientName];
      recipeNutrients[nutrientName] += nutrientPerGram * ingredientAmount;
    }
  }
  
  return recipeNutrients;
}

const recipeData = {
  canolaOil: 41.37234148204811,
  choline: 1,
  maltodextrin: 10.86234043141144,
  multivitamin: 1.8,
  oatFlour: 183.96388888888887,
  potassiumGluconate: 24.066540177400338,
  psylliumHusk: 24.46955012752132,
  salt: 4,
  wheyProtein: 239.15008742601458,
}

const res = checkNutrients(recipeData);
console.log(res);