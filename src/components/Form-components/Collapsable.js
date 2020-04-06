import React from 'react';


class Collapsable extends React.Component {
  constructor(props) {
    super(props);
    this.handleCollapse = this.handleCollapse.bind(this)
  }


  handleCollapse(event) {
    this.props.handleFuntion(event.currentTarget.id);
  }

  render() {

    return (
      <React.Fragment>
        <button type="button" className={this.props.styling} id={this.props.id} onClick={this.handleCollapse} >
          <i className={this.props.styleIcon}>
          </i>{this.props.title}</button>
          {this.props.children}
      </React.Fragment>
    );
  }

}


export default Collapsable;

