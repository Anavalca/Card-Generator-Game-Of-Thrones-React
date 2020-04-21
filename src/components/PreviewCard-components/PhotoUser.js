/* eslint-disable no-useless-constructor */
import React from "react";
// import defaultImageDarkMode from "../../images/jonsnow.gif";

class PhotoUser extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let photo = this.props.photo;
    // let darkModeValue = this.props.darkModeValue;
    return (
      <div
        className={"preview__card--picture"}
        style={{ backgroundImage: `url(${photo})` }}
        // {
        //   darkModeValue !== false && photo.length <= 35
        //     ? { backgroundImage: `url(${defaultImageDarkMode})` }
        //     : { backgroundImage: `url(${photo})` }
        // }
      >
        <canvas
          id="canvas"
          className="hiddenCanvas"
          width="220"
          height="200"
        ></canvas>
      </div>
    );
  }
}

export default PhotoUser;
