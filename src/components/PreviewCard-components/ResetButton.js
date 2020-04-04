/* eslint-disable no-useless-constructor */
import React from 'react';

class ResetButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button
          className="button_reset button__hover--styles"
          onclick="resetForm()"
          value="Reset form"
        >
          <i className="far fa-trash-alt"></i>
          RESET
        </button>
      </div>
    );
  }
}

export default ResetButton;
