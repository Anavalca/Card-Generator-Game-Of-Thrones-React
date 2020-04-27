import React from 'react';

const Collapsable = (props) => {
  const handleCollapse = (event) => {
    props.handleFunction(event.currentTarget.id);
  };

  return (
    <React.Fragment>
      <button
        type="button"
        className={props.styling}
        id={props.id}
        onClick={handleCollapse}
      >
        <i className={props.styleIcon}></i>
        {props.title}
      </button>
      {props.children}
    </React.Fragment>
  );
};

export default Collapsable;
