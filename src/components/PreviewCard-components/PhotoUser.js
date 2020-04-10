/* eslint-disable no-useless-constructor */
import React from 'react';


class PhotoUser extends React.Component {
    constructor(props) {
        super(props);
      }


    render() {
      return (
    
        <div className="preview__card--picture">
            <canvas id="canvas" classNames="hiddenCanvas" width="220" height="200"></canvas>
        </div>


      );
    }
}


export default PhotoUser;
