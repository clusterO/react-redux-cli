const readline = require("readline");
const fs = require("fs");

function M(name, schema) {
  return `const mongoose = require("mongoose");
  
const ${name} = mongoose.model(
"${name}", ${schema});

module.exports = ${name};`;
}

function SC(object) {
  return `const Schema = mongoose.Schema;
new Schema({
    ${object}
  })`;
}

module.exports = {
  M,
  SC,
};
