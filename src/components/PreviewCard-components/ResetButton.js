import React from 'react';

const ResetButton = (props) => {
  return (
    <div>
      <button
        className="button_reset button__hover--styles"
        onClick={props.resetAll}
        value="Reset form"
      >
        <i className="far fa-trash-alt"></i>
        RESET
      </button>
    </div>
  );
};

export default ResetButton;
