function FC(name, style, append) {
  return `${append ? "empty" : "import React from 'react'"}
${
  style && !append
    ? "import { withStyles } from '@material-ui/core/styles'"
    : "empty"
}

${style ? "const styles = {};" : "empty"}

function ${name}() {
  return (
    <div>
      
    </div>
  )
}

${
  style
    ? `export default withStyles(styles)(${name});`
    : `export default ${name};`
}
`.replace(/^\s*empty+$(?:\r\n?|\n)/gm, "");
}

function FCR(name, style, append) {
  return `${append ? "empty" : "import React, { Component } from 'react'"}
${append ? "empty" : "import { connect } from 'react-redux'"}
${
  style && !append
    ? "import { withStyles } from '@material-ui/core/styles'"
    : "empty"
}

${style ? "const styles = {};" : "empty"}
    
const ${name} = () => {
  return (
    <div>
      
    </div>
  )
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

${
  style
    ? `export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(${name}))`
    : `export default connect(mapStateToProps, mapDispatchToProps)(${name})`
}
`.replace(/^\s*empty+$(?:\r\n?|\n)/gm, "");
}

function CC(name, style, append) {
  return `${append ? "empty" : "import React, { Component } from 'react'"}
${
  style && !append
    ? "import { withStyles } from '@material-ui/core/styles'"
    : "empty"
}

${style ? "const styles = {};" : "empty"}

class ${name} extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

${style ? `export default withStyles(style)${name}` : `export default ${name}`}
`.replace(/^\s*empty+$(?:\r\n?|\n)/gm, "");
}

function CCR(name, style, append) {
  return `${append ? "empty" : "import React, { Component } from 'react'"}
${append ? "empty" : "import { connect } from 'react-redux'"}
${
  style && !append
    ? "import { withStyles } from '@material-ui/core/styles'"
    : "empty"
}

${style ? "const styles = {};" : "empty"}
    
class ${name} extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

${
  style
    ? `export default connect(mapStateToProps, mapDispatchToProps)(withStyles(style)(${name}))`
    : `export default connect(mapStateToProps, mapDispatchToProps)(${name})`
}
`.replace(/^\s*empty+$(?:\r\n?|\n)/gm, "");
}

module.exports = {
  FC,
  FCR,
  CC,
  CCR,
};
