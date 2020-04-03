/* eslint-disable no-useless-constructor */
import React from 'react';

class IconsRRSS extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div class="preview__card--links">

        <button class="preview__card--icon preview__card--iconEmail opacity">
          <i class="far fa-envelope"></i>
        </button>

        <button
          class="preview__card--icon opacity"
          id="preview__card--iconPhone">
          <i class="fas fa-mobile-alt "></i>
        </button>

        <button class="preview__card--icon preview__card--iconLinkedin opacity">
          <i class="fab fa-linkedin-in"></i>
        </button>

        <button class="preview__card--icon preview__card--iconGitHub opacity">
          <i class="fab fa-github-alt"></i>
        </button>

      </div>
    );
  }
}

export default IconsRRSS;
