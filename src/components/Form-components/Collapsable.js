import React from 'react';

class Collapsable extends React.Component {
    render() {
      return (
        <button type="button" className={this.props.styling}>
          <i className={this.props.styleIcon}>
          </i>{this.props.title}</button>
      );
    }
  }

//  Collapsable.defaultProps = {
    
//   };

  export default Collapsable;

