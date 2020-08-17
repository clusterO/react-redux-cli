#!/usr/bin/env node

const [, , ...args] = process.argv;

const path = require("path");
const REACT = require("./react");
const REDUX = require("./redux");
const fse = require("fs-extra");

const reactCommands = [
  "-fc",
  "--functional-component",
  "-fcr",
  "--functional-redux-component",
  "-cc",
  "--class-component",
  "-ccr",
  "--class-redux-component",
];
const reduxCommands = [
  "-rs",
  "--redux-store",
  "-rt",
  "--redux-type",
  "-rr",
  "--redux-reducer",
];
const mongooseCommands = ["-m", "--model", "-sc", "--schema"];

let excuteReactCommand = (cmd, style) => {
  if (args.indexOf(cmd) !== -1) {
    let componentName = args[args.indexOf(cmd) + 1];
    let execute;

    switch (cmd) {
      case "-fc":
      case "--functional-component":
        execute = REACT.FC;
        break;
      case "-fcr":
      case "--functional-redux-component":
        execute = REACT.FCR;
        break;
      case "-cc":
      case "--class-component":
        execute = REACT.CC;
        break;
      case "-ccr":
      case "--class-redux-component":
        execute = REACT.CCR;
        break;
    }

    if (args.indexOf("+") === -1)
      fse
        .outputFile(
          path.join(__dirname, `${componentName}.js`),
          execute(path.parse(componentName).base, style, false)
        )
        .catch((err) => {
          console.error(err);
        });
    else {
      let filename = `${args[args.indexOf("+") + 1]}.js`;
      fse
        .appendFile(
          path.join(__dirname, filename),
          execute(path.parse(componentName).base, style, true)
        )
        .catch((err) => console.log(err));
    }
  }
};

let excuteReduxCommand = (cmd) => {
  if (args.indexOf(cmd) !== -1) {
    switch (cmd) {
      case "-rs":
      case "--redux-store":
        fse
          .outputFile(path.join(__dirname, "store.js"), REDUX.RS())
          .catch((err) => {
            console.error(err);
          });

        fse.outputFile(path.join(__dirname, "types.js"), "").catch((err) => {
          console.error(err);
        });
        break;
      case "-rt":
      case "--redux-type":
        let type = args[args.indexOf("rt") + 1];
        fse
          .appendFile(path.join(__dirname, "types.js"), REDUX.RT(type))
          .catch((err) => {
            console.error(err);
          });
        break;
      case "-rr":
      case "--redux-reducer":
        REDUX.RR(path.join(__dirname, "types.js"))
          .then((data) => {
            fse
              .outputFile(path.join(__dirname, "reducers.js"), data)
              .catch((err) => {
                console.error(err);
              });
          })
          .catch((err) => console.error(err));
        break;
    }
  }
};

let excuteMongooseCommand = (cmd) => {
  if (args.indexOf(cmd) !== -1) {
    switch (cmd) {
      case "-m":
      case "--model":
        break;
      case "-sc":
      case "--schema":
        break;
    }
  }
};

reactCommands.forEach((cmd) => {
  if (args.indexOf("-s") !== -1 || args.indexOf("--style") !== -1) {
    if (args.indexOf("-s") !== -1) args.splice(args.indexOf("-s"), 1);
    else args.splice(args.indexOf("--style"), 1);
    excuteReactCommand(cmd, true);
  } else excuteReactCommand(cmd, false);
});

reduxCommands.forEach((cmd) => {
  excuteReduxCommand(cmd);
});

mongooseCommands.forEach((cmd) => {
  excuteMongooseCommand(cmd);
});
