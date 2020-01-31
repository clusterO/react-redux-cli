const path = require("path");
const fs = require("fs").promises;
const REACT = require("./react");
const REDUX = require("./redux");

const reactCommands = ["fc", "fcr", "cc", "ccr"];
const reduxCommands = ["rs", "rt", "rd"];
let userInput = [];

process.argv.forEach((val, index) => {
  if (index >= 2) userInput.push(val);
});

let excuteReactCommand = cmd => {
  if (userInput.indexOf(cmd) !== -1) {
    let componentName = userInput[userInput.indexOf(cmd) + 1];
    let execute;

    switch (cmd) {
      case "fc":
        execute = REACT.FC;
        break;
      case "fcr":
        execute = REACT.FCR;
        break;
      case "cc":
        execute = REACT.CC;
        break;
      case "ccr":
        execute = REACT.CCR;
        break;
    }

    if (userInput.indexOf("+") === -1)
      fs.writeFile(
        path.join(__dirname, `${componentName}.js`),
        execute(componentName)
      );
    else {
      let filename = `${userInput[userInput.indexOf("+") + 1]}.js`;
      fs.appendFile(path.join(filename), execute(componentName));
    }
  }
};

let excuteReduxCommand = cmd => {
  if (userInput.indexOf(cmd) !== -1) {
    switch (cmd) {
      case "rs":
        fs.writeFile(path.join(__dirname, "store.js"), REDUX.RS());
        fs.writeFile(path.join(__dirname, "types.js"), "");
        break;
      case "rt":
        let type = userInput[userInput.indexOf("rt") + 1];
        fs.appendFile(path.join(__dirname, "types.js"), REDUX.RT(type));
        break;
      case "rd":
        REDUX.RR(path.join(__dirname, "types.js"))
          .then(data => {
            fs.writeFile(path.join(__dirname, "reducers.js"), data);
          })
          .catch(err => console.error(err));
        break;
    }
  }
};

reactCommands.forEach(cmd => {
  excuteReactCommand(cmd);
});

reduxCommands.forEach(cmd => {
  excuteReduxCommand(cmd);
});
