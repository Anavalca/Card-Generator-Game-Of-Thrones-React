/* eslint-disable no-useless-constructor */
import React from "react";
import ResetButton from "./PreviewCard-components/ResetButton";
import UserInfo from "./PreviewCard-components/UserInfo";
import PhotoUser from "./PreviewCard-components/PhotoUser";
import IconsRRSS from "./PreviewCard-components/IconsRRSS";
import loop from "../images/loop-peque.gif";

class PreviewCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const palette = this.props.colorPaletteData;

    return (
      <div className="page__preview" id="page__preview">
        <div className="preview__card--container">
          <ResetButton resetAll={this.props.resetAll} />

          <div
            className={`preview__card--box preview__card--box--palette${
              palette || 1
            }`}
          >
            <UserInfo
              userName={this.props.userName}
              userJob={this.props.userJob}
            />

            <PhotoUser
              photo={this.props.photo}
              // darkModeValue={this.props.darkModeValue}
            />

            <IconsRRSS
              emailIcon={this.props.iconEmail}
              phoneIcon={this.props.iconPhone}
              linkedinIcon={this.props.iconLinkedin}
              githubIcon={this.props.iconGithub}
            />
          </div>

          <div className="loop__background--preview">
            <img src={loop} alt="Gif Loop" />
          </div>
        </div>
      </div>
    );
  }
}

export default PreviewCard;
