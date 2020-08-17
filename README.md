# react-redux-cli

#### React Redux generator

## Installation

npm i -g gnr

## Usage

rgn [Options] component_name (optional: + file_name)

## Options

- -fc | --functional-component: Create functional component
- -cc | --class-component: Create class component
- -fcr | --functional-redux-component: Create functional component and connect to redux store
- -ccr | --class-redux-component: Create class component and connect to redux store
- -s | style : Create component withStyles
- -rs | --redux-store: Create a redux store
- -rt | --redux-type: Add a type
- -rr | --redux-reducer: Create reducers for all types

To append the component to an existing file use +

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

- gnr -fc component_name
- gnr -fc component_name + file_name
- gnr -fcr component_name
- gnr -fcr -s component_name
- gnr -cc component_name
- gnr -cc -s component_name
- gnr -cc component_name + file_name
- gnr -cc -s component_name + file_name
- gnr -rs
- gnr -rt type_name
- gnr -rr
