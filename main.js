const path = require("path");
const readline = require("readline");
const fs = require("fs").promises;
const REACT = require("./react");
const REDUX = require("./redux");

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
        REACT.FC(componentName)
      );
    else fs.appendFile(path.join(__filename), REACT.CF(componentName));
  }

  if (commands.indexOf("cfr") !== -1) {
    let componentName = commands[commands.indexOf("cfr") + 1];

    if (commands.indexOf("+") === -1)
      fs.writeFile(
        path.join(__dirname, `${componentName}.js`),
        REACT.FCR(componentName)
      );
    else fs.appendFile(path.join(__filename), REACT.CFR(componentName));
  }

  if (commands.indexOf("cc") !== -1) {
    let componentName = commands[commands.indexOf("cc") + 1];

    if (commands.indexOf("+") === -1)
      fs.writeFile(
        path.join(__dirname, `${componentName}.js`),
        REACT.CC(componentName)
      );
    else fs.appendFile(path.join(__filename), REACT.CC(componentName));
  }

  if (commands.indexOf("ccr") !== -1) {
    let componentName = commands[commands.indexOf("ccr") + 1];

    if (commands.indexOf("+") === -1)
      fs.writeFile(
        path.join(__dirname, `${componentName}.js`),
        REACT.CCR(componentName)
      );
    else fs.appendFile(path.join(__filename), REACT.CCR(componentName));
  }

  if (commands.indexOf("rs") !== -1) {
    fs.writeFile(path.join(__dirname, "store.js"), REDUX.RS());
    fs.writeFile(path.join(__dirname, "types.js"), "");
  }

  if (commands.indexOf("rt") !== -1) {
    let type = commands[commands.indexOf("rt") + 1];

    fs.appendFile(path.join(__dirname, "types.js"), REDUX.RT(type));
  }

  if (commands.indexOf("rr") !== -1) {
    REDUX.RR(path.join(__dirname, "types.js"))
      .then(data => {
        fs.writeFile(path.join(__dirname, "reducers.js"), data);
      })
      .catch(err => console.error(err));
  }

  rl.close();
});
