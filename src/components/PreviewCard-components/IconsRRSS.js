/* eslint-disable no-useless-constructor */
import React from 'react';

const IconsRRSS = (props) => {

  return (
    <div className="preview__card--links">
      <button
        className={`preview__card--icon preview__card--iconEmail ${props.emailIcon}`}
      >
        <i className="far fa-envelope"></i>
      </button>

      <button
        className={`preview__card--icon preview__card--iconPhone ${props.phoneIcon}`}
      >
        <i className="fas fa-mobile-alt "></i>
      </button>

      <button
        className={`preview__card--icon preview__card--iconLinkedin ${props.linkedinIcon}`}
      >
        <i className="fab fa-linkedin-in"></i>
      </button>

      <button
        className={`preview__card--icon preview__card--iconGitHub ${props.githubIcon}`}
      >
        <i className="fab fa-github-alt"></i>
      </button>
    </div>
  );
}

export default IconsRRSS;
