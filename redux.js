const readline = require("readline");
const fs = require("fs");

function RS() {
  return `import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
//Import reducers

const initialState = {};
const middleware = [thunk];
const reducers = combineReducers({
  //Add reducers here
});
const store = createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : nil => nil
  )
);

export default store;
`;
}

function RT(type) {
  return `export const ${type} = "${type}";\r\n`;
}

function RR(file) {
  let imports = "";
  let cases = "";

  const rl = readline.createInterface({
    input: fs.createReadStream(file),
    output: process.stdout,
    terminal: false,
  });

  let types = [];

  return new Promise((resolve) => {
    rl.on("line", (line) => {
      types.push(line.split(" ")[2]);
    });

    rl.on("close", () => {
      types.forEach((type) => {
        imports += `${type},\r\n`;
      });

      types.forEach((type) => {
        cases += `case ${type}:
        return {
          ...state,
        };\r\n`;
      });

      resolve(`
      import {
        ${imports}
      } from "./types";
  
      const initialState = {
        //Initialize State Here
      };
  
      export default function (state = initialState, action) {
        switch (action.type) {
          ${cases}
            default:
              return state;
          }
        }
    `);
    });
  });
}

module.exports = {
  RS,
  RT,
  RR,
};
