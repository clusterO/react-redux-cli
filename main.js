const path = require("path");
const readline = require("readline");
const fs = require("fs").promises;
const CMP = require("./components");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("rr ", userInput => {
  let commands = userInput.split(" ");

  if (commands.indexOf("cf") !== -1) {
    let componentName = commands[commands.indexOf("cf") + 1];

    if (commands.indexOf("+") === -1)
      fs.writeFile(
        path.join(__dirname, `${componentName}.js`),
        CMP.CF(componentName)
      );
    else fs.appendFile(path.join(__filename), CMP.CF(componentName));
  }

  if (commands.indexOf("cfr") !== -1) {
    let componentName = commands[commands.indexOf("cfr") + 1];

    if (commands.indexOf("+") === -1)
      fs.writeFile(
        path.join(__dirname, `${componentName}.js`),
        CMP.CFR(componentName)
      );
    else
      fs.appendFile(path.join(__dirname, __filename), CMP.CFR(componentName));
  }

  if (commands.indexOf("cc") !== -1) {
    let componentName = commands[commands.indexOf("cc") + 1];

    if (commands.indexOf("+") === -1)
      fs.writeFile(
        path.join(__dirname, `${componentName}.js`),
        CMP.CC(componentName)
      );
    else fs.appendFile(path.join(__dirname, __filename), CMP.CC(componentName));
  }

  if (commands.indexOf("ccr") !== -1) {
    let componentName = commands[commands.indexOf("ccr") + 1];

    if (commands.indexOf("+") === -1)
      fs.writeFile(
        path.join(__dirname, `${componentName}.js`),
        CMP.CCR(componentName)
      );
    else
      fs.appendFile(path.join(__dirname, __filename), CMP.CCR(componentName));
  }

  if (commands.indexOf("ra") !== -1) {
  }
  if (commands.indexOf("rr") !== -1) {
  }

  rl.close();
});

    import React from 'react'

    export default function keke() {
      return (
        <div>
          
        </div>
      )
    }   
  