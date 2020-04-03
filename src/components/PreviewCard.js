/* eslint-disable no-useless-constructor */
import React from 'react';
import ResetButton from './PreviewCard-components/ResetButton';
import UserInfo from './PreviewCard-components/UserInfo';
import PhotoUser from './PreviewCard-components/PhotoUser';
import IconsRRSS from './PreviewCard-components/IconsRRSS';

class PreviewCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="page__preview" id="page__preview">
        <div class="preview__card--container">
          <ResetButton />

          <div class="preview__card--box preview__card--box--palette1">
            <UserInfo />
            <PhotoUser />
            <IconsRRSS />
          </div>

          <div class="loop__background--preview">
            <img
              src="https://media.giphy.com/media/3oxRmkKSBxU6i60qsM/giphy.gif"
              alt="Gif Loop"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default PreviewCard;
