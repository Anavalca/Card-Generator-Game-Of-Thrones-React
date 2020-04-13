import React from 'react';
import Webcam from 'react-webcam';
import WebcamComponent from './Webcam';

const videoConstraints = {
  width: 210,
  height: 200,
  facingMode: 'user',
};

const WebcamCapture = () => {
  const webcamRef = React.useRef(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
  }, [webcamRef]);

  return (
    <>
      <button
        type="button"
        id="cameraButton"
        className="button__hover--styles"
        onClick={capture}
      >
        ¡Hazte una foto!
      </button>


      <Webcam
        audio={false}
        height={100}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={110}
        videoConstraints={videoConstraints}
      />
      {/* <button type="button" onClick={capture}>Capture photo</button> */}

    </>
  );
};

export default WebcamCapture;

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
