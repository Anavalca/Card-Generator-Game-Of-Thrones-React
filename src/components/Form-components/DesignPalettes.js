import React from 'react';
import '../../stylesheets/App.scss';

class DesignPalettes extends React.Component {
  constructor(props) {
    super(props);    
  }

  
  render() {
    const hideStyle = {
      display: this.props.activePanel,
    };
  
    return(
        <div className={`panel__content panel__content--design display__none`} style={hideStyle} id="form__design" >
      
        <div className="design-form-container">
      
          <div className="design-form-form">
            <h3>colores</h3>
      
            <div className="design-form-colours">
              
              <form id="myFormPalette">
                
                <div className="palette">
                  <input type="radio" id="colorPalette1" name="palette" value="1" className="input-palette" ></input>
                  <label for="colorPalette1">
                    <div className="palette-colour-container">
                      <div className="palette-colour colorBox__1-1"></div>
                      <div className="palette-colour colorBox__1-2"></div>
                      <div className="palette-colour colorBox__1-3"></div>
                    </div>
                  </label>

                </div>
      
                <div className="palette">
                  <input type="radio" id="colorPalette2" name="palette" value="2" className="input-palette"></input>
                  <label for="colorPalette2">
                    <div className="palette-colour-container">
                      <div className="palette-colour colorBox__2-1"></div>
                      <div className="palette-colour colorBox__2-2"></div>
                      <div className="palette-colour colorBox__2-3"></div>
                    </div>
                  </label>
                </div>
      
                <div className="palette">
                  <input type="radio" id="colorPalette3" name="palette" value="3" className="input-palette"></input>
                  <label for="colorPalette3">
                    <div className="palette-colour-container">
                      <div className="palette-colour colorBox__3-1"></div>
                      <div className="palette-colour colorBox__3-2"></div>
                      <div className="palette-colour colorBox__3-3"></div>
                    </div>
                  </label>
                </div>
      
                <div className="palette">
                  <input type="radio" id="colorPalette4" name="palette" value="4" className="input-palette"></input>
                  <label for="colorPalette4">
                    <div className="palette-colour-container">
                      <div className="palette-colour colorBox__4-1"></div>
                      <div className="palette-colour colorBox__4-2"></div>
                      <div className="palette-colour colorBox__4-3"></div>
                    </div>
                  </label>
                </div>
      
              </form>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}


export default DesignPalettes;