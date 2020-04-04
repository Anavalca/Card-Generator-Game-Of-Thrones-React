import React from 'react';

class Collapsable extends React.Component {
  constructor(props) {
    super(props);
    this.handleCollapse = this.handleCollapse.bind(this)
  }

  handleCollapse(event) {
    this.props.children.styling = "active"
  }

    render() {
      return (
        <div>
          <button type="button" className={this.props.styling} onClick={this.handleCollapse} >
            <i className={this.props.styleIcon}>
            </i>{this.props.title}</button>
            {this.props.children}
        </div>
      );
    }
  }

//  Collapsable.defaultProps = {
    
//   };

  export default Collapsable;

