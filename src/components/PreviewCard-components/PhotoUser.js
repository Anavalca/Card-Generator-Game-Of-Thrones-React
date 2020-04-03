/* eslint-disable no-useless-constructor */
import React from 'react';

class PhotoUser extends React.Component {
    constructor(props) {
        super(props);
      }


    render() {
      return (
    
        <div class="preview__card--picture">
            <canvas id="canvas" class="hiddenCanvas" width="220" height="200"></canvas>
        </div>


      );
    }
}


export default PhotoUser;
