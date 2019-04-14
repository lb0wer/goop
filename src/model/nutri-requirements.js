/*
	Inputs finds takes a user's profile and calculates their daily macro-nutrient requirements. This can be fed into
	the Outputs package which generates the user's personalised recipe based on these requirements.
	The user's profile is stored in a struct containing the following variables:
		Weight - measured in kg
		Height - measured in cm
		Body Fat - dimensionless ratio (bewteen 0 and 1
		Activity Level - a modifier based on the user's daily exercise amount (between 1 and 2)
		Age
		Gender
		Regime - the user's desired regime: bulk, cut or maintain
	The user's macro-nutrient requirements are stored in a struct containing the following variables
		Carbs - the user's recommended daily carbohydrate intake, measured in g
		Protein - the user's recommended daily protein intake, measured in g
		Fat - the user's recommended daily fat intake, measured in g
		Calories - the user's recommended daily calorie intake, measured in kcal
*/

const kilo2Pound = 2.20462262 	// kilogram to pound conversion factor
const pMassRatio = 1.5			// number of grams of protein required per lb of lean body mass
const fMassRatio = 0.45			// number of grams of fat required per lb of body mass
const pCalRatio = 4				// number of calories in each gram of protein
const fCalRatio = 9				// number of calories in each gram of fat
const cCalRatio = 4				// number of calories in each gram of carbohydrate
const bulkModifier = 1.1		// calorie modifier for bulk regime
const cutModifier = 0.9			// calorie modifier for cut regime

export function createNutriRequirements(profile) {
  const macros = getMacros(profile);
  //const micros = getMicros(profile);
  return macros;
}

function getMacros(profile) {
  const macros = {
    carbs: null, 
    protein: null, 
    fat: null, 
    calories: null,
  }
	
  macros.protein = pMassRatio * leanBodyMass(profile.weight, profile.bodyFat) * kilo2Pound
  macros.fat = fMassRatio * profile.weight * kilo2Pound
  macros.calories = findCalories(profile)
  macros.carbs = (macros.calories - pCalRatio*macros.protein - fCalRatio*macros.fat)/cCalRatio

  return macros

  function leanBodyMass(weight, bodyFat) {
    return weight * (1-bodyFat)
  }

  function findCalories(profile) {
    // calorie calculation methodologies
    var harrisBenedict;
    var mifflinStJeor;
    const katchMcArdle = 370 + (leanBodyMass(profile.weight, profile.bodyFat) * 21.6);
    setMethodologyValues();
    let calorieBase = getCalorieBase();
    let calories = scaleCaloriesForRegime(calorieBase);
    return calories;

    function setMethodologyValues() {
      switch (profile.gender) {
        case "male":
          setMethodologyValuesMale();
          break;
        case "female":
          setMethodologyValuesFemale();
          break;
        default:
          throw new Error('You must choose a gender');
      }
    }

    function setMethodologyValuesMale() {
      harrisBenedict = 66 + (13.7 * profile.weight) + (5 * profile.height) - (6.76 * profile.age)
      mifflinStJeor = (9.99 * profile.weight) + (6.25 * profile.height) - (4.92 * profile.age) + 5
    }
  
    function setMethodologyValuesFemale() {
      harrisBenedict = 655 + (9.6 * profile.weight) + (1.8 * profile.height) - (4.7 * profile.age)
      mifflinStJeor = (9.99 * profile.weight) + (6.25 * profile.height) - (4.92 * profile.age) - 161
    }

    function getCalorieBase() {
      return profile.activity * (harrisBenedict + mifflinStJeor + katchMcArdle) / 3
    }

    function scaleCaloriesForRegime(calorieBase) {
      switch (profile.regime) {
        case "bulk":
          return calorieBase * bulkModifier
        case "maintain":
          return calorieBase
        case "cut":
          return calorieBase * cutModifier
        default:
          return calorieBase;
      }
    }
  
  }
}