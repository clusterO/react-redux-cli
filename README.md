# react-redux-cli

#### React Redux generator

## Installation

npm i -g rgn

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

- rgn -fc component_name</br>
  OR
- rgn --functional-component component_name</br>

##### Generate functional component with style

- rgn -fc -s component_name</br>

##### Generate class component with style connected to redux

- rgn -ccr -s component_name</br>

##### Append to an existing file

- rgn -fc -s component_name + file_name</br>

##### Generate component to a specific directory

- rgn -fc -s /directory_name/../component_name</br>

## Commands list

- rgn -fc component_name
- rgn -fc component_name + file_name
- rgn -fcr component_name
- rgn -fcr -s component_name
- rgn -cc component_name
- rgn -cc -s component_name
- rgn -cc component_name + file_name
- rgn -cc -s component_name + file_name
- rgn -rs
- rgn -rt type_name
- rgn -rr
