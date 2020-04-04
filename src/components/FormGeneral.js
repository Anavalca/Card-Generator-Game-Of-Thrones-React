/* eslint-disable no-useless-constructor */
import React from 'react';
import CollapsableList from './Form-components/CollapsableList';

class FormGeneral extends React.Component {
  constructor(props) {
    super(props);
    this.handleCollapse = this.handleCollapse.bind(this);
    this.state = {
      activePanel: '',
    };
  }

  handleCollapse(targetId) {
    this.setState({ activePanel: targetId });
  }

  render() {
    return (
      <React.Fragment>
        <CollapsableList
          handleCollapse={this.handleCollapse}
          activePanel={this.state.activePanel}
        />
      </React.Fragment>
    );
  }
}

export default FormGeneral;
