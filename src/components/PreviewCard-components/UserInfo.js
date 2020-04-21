/* eslint-disable no-useless-constructor */
import React from 'react';

const UserInfo = (props) => {

  return (
    <div className="preview__card--header">
      <h2 className="font__preview--title">
        {props.userName === '' ? 'Nombre Apellido' : props.userName}
      </h2>
      <h3 className="font__preview--subtitle">
        {props.userJob === ""
          ? "Mother of Code"
          : props.userJob}
      </h3>
      <div className="preview__style--color"></div>
    </div>
  );
}

export default UserInfo;
