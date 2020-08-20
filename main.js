#!/usr/bin/env node

const [, , ...args] = process.argv;

const path = require("path");
const REACT = require("./react");
const REDUX = require("./redux");
const fse = require("fs-extra");

const reactCommands = {
  "-fc": REACT.FC,
  "--functional-component": REACT.FC,
  "-fcr": REACT.FCR,
  "--functional-redux-component": REACT.FCR,
  "-cc": REACT.CC,
  "--class-component": REACT.CC,
  "-ccr": REACT.CCR,
  "--class-redux-component": REACT.CCR,
};

const reduxCommands = {
  "-rs": () => fse.outputFile(path.join(__dirname, "store.js"), REDUX.RS()),
  "--redux-store": () =>
    fse.outputFile(path.join(__dirname, "store.js"), REDUX.RS()),
  "-rt": () => {
    const type = args[args.indexOf("-rt") + 1];
    return fse.appendFile(path.join(__dirname, "types.js"), REDUX.RT(type));
  },
  "--redux-type": () => {
    const type = args[args.indexOf("--redux-type") + 1];
    return fse.appendFile(path.join(__dirname, "types.js"), REDUX.RT(type));
  },
  "-rr": () => {
    const typesPath = path.join(__dirname, "types.js");
    return REDUX.RR(typesPath).then((data) => {
      return fse.outputFile(path.join(__dirname, "reducers.js"), data);
    });
  },
  "--redux-reducer": () => {
    const typesPath = path.join(__dirname, "types.js");
    return REDUX.RR(typesPath).then((data) => {
      return fse.outputFile(path.join(__dirname, "reducers.js"), data);
    });
  },
};

const mongooseCommands = {
  "-m": () => {},
  "--model": () => {},
  "-sc": () => {},
  "--schema": () => {},
};

const executeCommand = (cmd, style, appendToExistingFile = false) => {
  const componentName = args[args.indexOf(cmd) + 1];
  const execute = reactCommands[cmd];

  if (!execute) return;

  const outputFilePath = appendToExistingFile
    ? path.join(__dirname, `${args[args.indexOf("+") + 1]}.js`)
    : path.join(__dirname, `${componentName}.js`);

  const fileContent = execute(
    path.parse(componentName).base,
    style,
    appendToExistingFile
  );

  return fse.outputFile(outputFilePath, fileContent).catch((err) => {
    console.error(err);
  });
};

const executeCommands = (commands, executeFn) => {
  Object.keys(commands).forEach((cmd) => {
    if (args.indexOf(cmd) !== -1) {
      return executeFn(cmd);
    }
  });
};

executeCommands(reactCommands, (cmd) => {
  const isStyleFlagProvided =
    args.indexOf("-s") !== -1 || args.indexOf("--style") !== -1;
  const styleFlagIndex =
    args.indexOf("-s") !== -1 ? args.indexOf("-s") : args.indexOf("--style");
  const styleArgIndex = styleFlagIndex + 1;

  if (isStyleFlagProvided) {
    args.splice(styleFlagIndex, 1);
    executeCommand(cmd, true);
  } else {
    executeCommand(cmd, false);
  }
});

executeCommands(reduxCommands, (cmd) => {
  return reduxCommands[cmd]();
});

executeCommands(mongooseCommands, (cmd) => {
  return mongooseCommands[cmd]();
});
