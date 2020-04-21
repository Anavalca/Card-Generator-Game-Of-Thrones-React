/* eslint-disable no-useless-constructor */
import React from 'react';
import ResetButton from './PreviewCard-components/ResetButton';
import UserInfo from './PreviewCard-components/UserInfo';
import PhotoUser from './PreviewCard-components/PhotoUser';
import IconsRRSS from './PreviewCard-components/IconsRRSS';
import loop from '../images/loop-peque.gif';

const PreviewCard = (props) => {
    const palette = props.colorPaletteData;
    const {resetAll, userName, userJob, photo, darkModeValue, iconEmail, iconPhone, iconLinkedin, iconGithub } = props;

    return (
      <div className="page__preview" id="page__preview">
        <div className="preview__card--container">
          <ResetButton resetAll={resetAll} />

          <div
            className={`preview__card--box preview__card--box--palette${
              palette || 1
            }`}
          >
            <UserInfo
              userName={userName}
              userJob={userJob}
            />

            <PhotoUser
              photo={photo}
              darkModeValue={darkModeValue}
            />

            <IconsRRSS
              emailIcon={iconEmail}
              phoneIcon={iconPhone}
              linkedinIcon={iconLinkedin}
              githubIcon={iconGithub}
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
