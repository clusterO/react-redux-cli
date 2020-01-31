const path = require("path");
const readline = require("readline");
const fs = require("fs").promises;
const REACT = require("./react");
const REDUX = require("./redux");

const reactCommands = ["fc", "fcr", "cc", "ccr"];
const reduxCommands = ["rs", "rt", "rd"];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

process.argv.forEach((val, index) => {
  if (index >= 2) console.log(`${index} : ${val}`);
});

rl.question("", userInput => {
  reactCommands.forEach(cmd => {
    excuteReactCommand(cmd, userInput);
  });

  reduxCommands.forEach(cmd => {
    excuteReduxCommand(cmd, userInput);
  });

  rl.close();
});

let excuteReactCommand = (cmd, userInput) => {
  let commands = userInput.split(" ");

  if (commands.indexOf(cmd) !== -1) {
    let componentName = commands[commands.indexOf(cmd) + 1];
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

    if (commands.indexOf("+") === -1)
      fs.writeFile(
        path.join(__dirname, `${componentName}.js`),
        execute(componentName)
      );
    else {
      let filename = `${commands[commands.indexOf("+") + 1]}.js`;
      fs.appendFile(path.join(filename), execute(componentName));
    }
  }
};

let excuteReduxCommand = (cmd, userInput) => {
  let commands = userInput.split(" ");

  if (commands.indexOf(cmd) !== -1) {
    switch (cmd) {
      case "rs":
        fs.writeFile(path.join(__dirname, "store.js"), REDUX.RS());
        fs.writeFile(path.join(__dirname, "types.js"), "");
        break;
      case "rt":
        let type = commands[commands.indexOf("rt") + 1];
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
