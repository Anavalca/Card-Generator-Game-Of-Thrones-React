/* eslint-disable no-useless-constructor */
import React from 'react';
import ResetButton from './PreviewCard-components/ResetButton';
import UserInfo from './PreviewCard-components/UserInfo';
import PhotoUser from './PreviewCard-components/PhotoUser';
import IconsRRSS from './PreviewCard-components/IconsRRSS';
import loop from '../images/loop-peque.gif';

const PreviewCard = (props) => {
    const palette = props.colorPaletteData;

    return (
      <div className="page__preview" id="page__preview">
        <div className="preview__card--container">
          <ResetButton resetAll={props.resetAll} />

          <div
            className={`preview__card--box preview__card--box--palette${
              palette || 1
            }`}
          >
            <UserInfo
              userName={props.userName}
              userJob={props.userJob}
            />

            <PhotoUser
              photo={props.photo}
              darkModeValue={props.darkModeValue}
            />

            <IconsRRSS
              emailIcon={props.iconEmail}
              phoneIcon={props.iconPhone}
              linkedinIcon={props.iconLinkedin}
              githubIcon={props.iconGithub}
            />
          </div>

          <div className="loop__background--preview">
            <img src={loop} alt="Gif Loop" />
          </div>
        </div>
      </div>
    );

}

export default PreviewCard;
