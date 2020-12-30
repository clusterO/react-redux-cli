# react-redux-cli

<h4>React Redux generator</h4>

## Installation

npm i -g gnr

## Usage

gnr [Options] component_name (optional: + file_name)

## Options

-fc | --functional-component: Create functional component </br>
-cc | --class-component: Create class component</br>
-fcr | --functional-redux-component: Create functional component and connect to redux store</br>
-ccr | --class-redux-component: Create class component and connect to redux store</br>
-s | style : Create component withStyles</br>
-rs | --redux-store: Create a redux store</br>
-rt | --redux-type: Add a type</br>
-rr | --redux-reducer: Create reducers for all types</br>

To append the component to an existing file use + </br></br>

## e.g

- gnr -fc component_name</br>
  OR
- gnr --functional-component component_name</br>

##### Generate functional component with style

- gnr -fc -s component_name</br>

##### Generate class component with style connected to redux

- gnr -ccr -s component_name</br>

##### Append to an existing file

- gnr -fc -s component_name + file_name</br>

##### Generate component to a specific directory

- gnr -fc -s /directory_name/../component_name</br>

## Commands list

- gnr -fc component_name</br>
- gnr -fc component_name + file_name</br>
- gnr -fcr component_name </br>
- gnr -fcr -s component_name </br>
- gnr -cc component_name </br>
- gnr -cc -s component_name </br>
- gnr -cc component_name + file_name</br>
- gnr -cc -s component_name + file_name</br>
- gnr -rs</br>
- gnr -rt type_name</br>
- gnr -rd</br>
