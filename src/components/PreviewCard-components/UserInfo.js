/* eslint-disable no-useless-constructor */
import React from 'react';

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div class="preview__card--header">
        <h2 class="font__preview--title">Nombre Apellido</h2>
        <h3 class="font__preview--subtitle">Front-end developer</h3>
        <div class="preview__style--color"></div>
      </div>
      
    );
  }
}

export default UserInfo;
