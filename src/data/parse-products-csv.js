const fs = require("fs");
const csv = require("csvtojson");

async function parseCsvToProductsJson() {
  const rows = await csv().fromFile("./products.csv");
  let products = {};
  for(let row  of rows) {
    products[row.product] = row;
    delete products[row.product].product;
  }
  fs.writeFileSync('./products.json', JSON.stringify(products), 'utf8')
}

parseCsvToProductsJson();