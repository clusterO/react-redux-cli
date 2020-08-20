function FC(name, style, append) {
  let importStatements = "";
  let withStylesStatement = "";
  let stylesDeclaration = "";
  let exportStatement = "";

  if (!append) {
    importStatements = "import React from 'react';\n";
    withStylesStatement = style
      ? "import { withStyles } from '@material-ui/core/styles';\n"
      : "";
    stylesDeclaration = style ? "const styles = {};\n" : "";
  }

  exportStatement = style
    ? `export default withStyles(styles)(${name});\n`
    : `export default ${name};\n`;

  return `${importStatements}${withStylesStatement}${stylesDeclaration}
function ${name}() {
  return (
    <div>
      
    </div>
  );
}

${exportStatement}`;
}

function FCR(name, style, append) {
  let importStatements = "";
  let connectStatement = "";
  let withStylesStatement = "";
  let stylesDeclaration = "";
  let mapStateToProps = "";
  let mapDispatchToProps = "";
  let exportStatement = "";

  if (!append) {
    importStatements = "import React, { Component } from 'react';\n";
    connectStatement = append ? "" : "import { connect } from 'react-redux';\n";
    withStylesStatement = style
      ? "import { withStyles } from '@material-ui/core/styles';\n"
      : "";
    stylesDeclaration = style ? "const styles = {};\n" : "";
    mapStateToProps = "const mapStateToProps = (state) => ({\n\n});\n";
    mapDispatchToProps = "const mapDispatchToProps = {\n\n};\n";
  }

  exportStatement = style
    ? `export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(${name}));\n`
    : `export default connect(mapStateToProps, mapDispatchToProps)(${name});\n`;

  return `${importStatements}${connectStatement}${withStylesStatement}${stylesDeclaration}
const ${name} = () => {
  return (
    <div>
      
    </div>
  );
}

${mapStateToProps}${mapDispatchToProps}${exportStatement}`;
}

function CC(name, style, append) {
  let importStatements = "";
  let withStylesStatement = "";
  let stylesDeclaration = "";
  let exportStatement = "";

  if (!append) {
    importStatements = "import React, { Component } from 'react';\n";
    withStylesStatement = style
      ? "import { withStyles } from '@material-ui/core/styles';\n"
      : "";
    stylesDeclaration = style ? "const styles = {};\n" : "";
  }

  exportStatement = style
    ? `export default withStyles(style)(${name});\n`
    : `export default ${name};\n`;

  return `${importStatements}${withStylesStatement}${stylesDeclaration}
class ${name} extends Component {
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

${exportStatement}`;
}

function CCR(name, style, append) {
  let importStatements = "";
  let connectStatement = "";
  let withStylesStatement = "";
  let stylesDeclaration = "";
  let mapStateToProps = "";
  let mapDispatchToProps = "";
  let exportStatement = "";

  if (!append) {
    importStatements = "import React, { Component } from 'react';\n";
    connectStatement = append ? "" : "import { connect } from 'react-redux';\n";
    withStylesStatement = style
      ? "import { withStyles } from '@material-ui/core/styles';\n"
      : "";
    stylesDeclaration = style ? "const styles = {};\n" : "";
    mapStateToProps = "const mapStateToProps = (state) => ({\n\n});\n";
    mapDispatchToProps = "const mapDispatchToProps = {\n\n};\n";
  }

  exportStatement = style
    ? `export default connect(mapStateToProps, mapDispatchToProps)(withStyles(style)(${name}));\n`
    : `export default connect(mapStateToProps, mapDispatchToProps)(${name});\n`;

  return `${importStatements}${connectStatement}${withStylesStatement}${stylesDeclaration}
class ${name} extends Component {
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

${mapStateToProps}${mapDispatchToProps}${exportStatement}`;
}

module.exports = {
  FC,
  FCR,
  CC,
  CCR,
};
