/* eslint-disable no-useless-constructor */
import React from "react";
import defaultImageDarkMode from "../../images/jonsnow.gif";

class PhotoUser extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let photo = this.props.photo;
    let darkModeValue = this.props.darkModeValue;
    return (
      <div
        className={"preview__card--picture"}
        style={
          darkModeValue !== false && photo.length <= 35
            ? { backgroundImage: `url(${defaultImageDarkMode})` }
            : { backgroundImage: `url(${photo})` }
        }
      >
        {/* <img src={this.props.photo} alt="Foto de usuario"></img> */}
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
