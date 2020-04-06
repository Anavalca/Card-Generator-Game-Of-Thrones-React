/* eslint-disable no-useless-constructor */
import React from 'react';

class IconsRRSS extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div className="preview__card--links">

        <button className="preview__card--icon preview__card--iconEmail opacity">
          <i className="far fa-envelope"></i>
        </button>

        <button
          className="preview__card--icon opacity"
          id="preview__card--iconPhone">
          <i className="fas fa-mobile-alt "></i>
        </button>

        <button className="preview__card--icon preview__card--iconLinkedin opacity">
          <i className="fab fa-linkedin-in"></i>
        </button>

        <button className="preview__card--icon preview__card--iconGitHub opacity">
          <i className="fab fa-github-alt"></i>
        </button>

      </div>
    );
  }
}

export default IconsRRSS;
