/* eslint-disable no-useless-constructor */
import React from 'react';

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div className="preview__card--header">
        <h2 className="font__preview--title">Nombre Apellido</h2>
        <h3 className="font__preview--subtitle">Front-end developer</h3>
        <div className="preview__style--color"></div>
      </div>
      
    );
  }
}

export default UserInfo;
