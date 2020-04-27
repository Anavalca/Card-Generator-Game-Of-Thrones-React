/* eslint-disable no-useless-constructor */
import React from 'react';

const IconsRRSS = (props) => {

  const {emailIcon, phoneIcon, linkedinIcon, githubIcon} = props;

  return (
    <div className="preview__card--links">
      <button
        className={`preview__card--icon preview__card--iconEmail ${emailIcon}`}
      >
        <i className="far fa-envelope"></i>
      </button>

      <button
        className={`preview__card--icon preview__card--iconPhone ${phoneIcon}`}
      >
        <i className="fas fa-mobile-alt "></i>
      </button>

      <button
        className={`preview__card--icon preview__card--iconLinkedin ${linkedinIcon}`}
      >
        <i className="fab fa-linkedin-in"></i>
      </button>

      <button
        className={`preview__card--icon preview__card--iconGitHub ${githubIcon}`}
      >
        <i className="fab fa-github-alt"></i>
      </button>
    </div>
  );
}

export default IconsRRSS;
