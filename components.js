function CF(name) {
  return `
    import React from 'react'

    export default function ${name}() {
      return (
        <div>
          
        </div>
      )
    }   
  `;
}

function CFR(name) {
  return `
    import React, { Component } from 'react'
    import { connect } from 'react-redux'
    
    export const ${name} = () => {
      return (
        <div>
          
        </div>
      )
    }
    
    const mapStateToProps = (state) => ({
      
    })
    
    const mapDispatchToProps = {
      
    }
    
    export default connect(mapStateToProps, mapDispatchToProps)(${name})
`;
}

function CC(name) {
  return `
    import React, { Component } from 'react'

    export class ${name} extends Component {
      render() {
        return (
          <div>
            
          </div>
        )
      }
    }

    export default ${name}
`;
}

function CCR(name) {
  return `
    import React, { Component } from 'react'
    import { connect } from 'react-redux'
    
    export class ${name} extends Component {
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
    
    export default connect(mapStateToProps, mapDispatchToProps)(${name})
`;
}

module.exports = {
  CF,
  CFR,
  CC,
  CCR,
};
