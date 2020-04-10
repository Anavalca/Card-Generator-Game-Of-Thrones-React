/* eslint-disable no-useless-constructor */
import React from 'react';

class IconsRRSS extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div className="preview__card--links">

        <button className={`preview__card--icon preview__card--iconEmail ${this.props.emailIcon}`}>
          <i className="far fa-envelope"></i>
        </button>

        <button
          className={`preview__card--icon preview__card--iconPhone ${this.props.phoneIcon}`}>
          <i className="fas fa-mobile-alt "></i>
        </button>

        <button className={`preview__card--icon preview__card--iconLinkedin ${this.props.linkedinIcon}`}>
          <i className="fab fa-linkedin-in"></i>
        </button>

        <button className={`preview__card--icon preview__card--iconGitHub ${this.props.githubIcon}`}>
          <i className="fab fa-github-alt"></i>
        </button>

      </div>
    );
  }
}

export default IconsRRSS;
