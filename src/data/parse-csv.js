const fs = require("fs");
const csv = require("csvtojson");

async function parseCsvToIngredientsJson() {
  const rows = await csv().fromFile("./ingredients.csv");
  let ingredients = {};
  for(let row  of rows) {
    ingredients[row.ingredient] = row;
    delete ingredients[row.ingredient].ingredient;
  }
  fs.writeFileSync('./ingredients.json', JSON.stringify(ingredients), 'utf8')
}

parseCsvToIngredientsJson();