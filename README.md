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

#### ToDo

- Command Line Interface (CLI): Enhance the project by creating a CLI interface using a library like commander or yargs. This would provide a user-friendly way to interact with the project and execute commands.

- Template Customization: Allow users to customize the generated code templates for components, reducers, and other files. You can provide configuration files where users can define their own templates or override existing ones.

- File Generation in Custom Directories: Extend the functionality to allow users to specify a custom directory path where the generated files should be created instead of the default directory. This provides more flexibility in organizing the generated code within the project structure.

- Interactive Prompts: Implement interactive prompts to guide users through the generation process. Instead of passing command-line arguments, users can interactively provide inputs like component name, style options, file names, etc.

- File and Folder Organization: Improve the project's file and folder structure by separating different file types (components, reducers, types, etc.) into their respective directories. This enhances code organization and maintainability.

- Code Formatting and Linting: Integrate code formatting and linting tools like Prettier and ESLint to automatically format the generated code and enforce code quality standards.

- Documentation Generation: Implement a feature to automatically generate documentation for the generated code. You can leverage tools like JSDoc or Markdown to generate API documentation and component usage instructions.

- Unit Testing Support: Integrate unit testing frameworks like Jest or Mocha to generate the initial test files along with the components. This promotes test-driven development and ensures code reliability.

- Dependency Management: Improve the project by incorporating a dependency management system. This can involve generating package.json files, automatically installing dependencies, and managing version updates.

- Code Generation Extensibility: Design the project in a modular and extensible way, allowing for the easy addition of new code generation templates and customization options. This enables future expansion of the project to support additional code patterns and frameworks.
