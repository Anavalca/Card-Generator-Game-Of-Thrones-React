import React from 'react';
import defaultImageDarkMode from '../../images/jonsnow.gif';
import defaultImage from '../../images/daenerys.gif';

const PhotoUser = (props) => {
  let photo = props.photo;
  let darkModeValue = props.darkModeValue;

  return (
    <div
      className={'preview__card--picture'}
      style={
        darkModeValue !== false   && photo === defaultImage  
          ? { backgroundImage: `url(${defaultImageDarkMode})` }
          : { backgroundImage: `url(${photo})` }
      }
    >
      <canvas
        id="canvas"
        className="hiddenCanvas"
        width="220"
        height="200"
      ></canvas>
    </div>
  );
};

export default PhotoUser;
