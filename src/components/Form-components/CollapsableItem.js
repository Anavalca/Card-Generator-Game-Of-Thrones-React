import React from 'react';

class CollapsableItem extends React.Component {
  constructor(props) {
    super(props);
    this.displayPanel = this.displayPanel.bind(this)
    
  }


  displayPanel(evt) {
    this.props.handleCollapse(evt.currentTarget.id)
  }


    render() {
      return (

        <div id={this.props.id} onClick={this.displayPanel} className={`collapse-item ${this.props.activePanel === this.props.id ? "active" : ""}`}>
        {this.props.children}
      </div>

        
      );
    }
  }


  export default CollapsableItem;

