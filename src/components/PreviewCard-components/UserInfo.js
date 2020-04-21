/* eslint-disable no-useless-constructor */
import React from 'react';

const UserInfo =  (props) => {

  const {userName, userJob} = props;
  return (
    <div className="preview__card--header">
      <h2 className="font__preview--title">
        {userName === '' ? 'Nombre Apellido' : userName}
      </h2>
      <h3 className="font__preview--subtitle">
        {userJob === ""
          ? "Mother of Code"
          :userJob}
      </h3>
      <div className="preview__style--color"></div>
    </div>
  );
}

export default UserInfo;
