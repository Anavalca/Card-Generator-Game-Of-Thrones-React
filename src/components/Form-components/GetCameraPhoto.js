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
              className="button__hover--styles"
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

/*   return (
    <div>
      <button 
        className="button__hover--styles"
        type="button"
        id="cameraButton"
        onClick={webcamRef}
        
      >
        ¡Hazte una foto!
      </button>



    </div>
  );
}; */

export default GetCameraPhoto;

// <button id="cameraButton" class="button__hover--styles">¡Hazte una foto!</button>

// <!—Aquí el video embebido de la webcam -->
//   <div class="video-wrap hiddenCamera">
//     <video id="video" playsinline autoplay controls muted></video>
//   </div>
//   <!—Botón de captura -->
//     <div class="controller hiddenCamera">
//       <button id="snap" class="button__hover--styles">Capture</button>
//     </div>

// export default CamPhoto;
