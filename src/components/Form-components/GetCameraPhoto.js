import React from 'react';
import Webcam from 'react-webcam';

class GetCameraPhoto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screenshot: null,
      tab: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    const screenshot = this.webcam.getScreenshot();
    this.setState({ screenshot });

    this.props.saveScreenshot(screenshot);
  };

  render() {
    return (
      <div>
        <Webcam
          audio={false}
          width="200"
          ref={(node) => (this.webcam = node)}
        />

        <div className="screenshots">
          <div className="controls">
            <button
              className="button__hover--styles capture__button"
              onClick={this.handleClick}
            >
              Captura
            </button>
          </div>
          {this.state.screenshot ? (
            <img src={this.state.screenshot} alt="Captura" />
          ) : null}
        </div>
      </div>
    );
  }
}

export default GetCameraPhoto;
