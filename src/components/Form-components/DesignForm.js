import React from 'react';
import '../../stylesheets/App.scss';

class DesignForm extends React.Component {
  constructor(props) {
    super(props);

    this.paletteHandler = this.paletteHandler.bind(this);
  }

  paletteHandler(event) {
    const checked = event.currentTarget.value;
    this.props.paletteHandler(checked);
  }

  render() {
    const hideStyle = {
      display: this.props.activePanel,
    };

    return (
      <div
        className="panel__content display__none"
        style={hideStyle}
        id="form__design"
      >
        <div className="design-form-container">
          <div className="design-form-form">
            <h3>colores</h3>

            <div className="design-form-colours">
              <form id="myFormPalette">
                <div className="palette">
                  <input
                    type={this.props.type}
                    name={this.props.name}
                    id="colorPalette1"
                    value="1"
                    className="input-palette"
                    onChange={this.paletteHandler}
                    checked={this.props.colorPaletteData === '1' ? true : false}
                  />

                  <label htmlFor="colorPalette1">
                    <div className="palette-colour-container">
                      <div className="palette-colour colorBox__1-1"></div>
                      <div className="palette-colour colorBox__1-2"></div>
                      <div className="palette-colour colorBox__1-3"></div>
                    </div>
                  </label>
                </div>

                <div className="palette">
                  <input
                    type={this.props.type}
                    name={this.props.name}
                    id="colorPalette2"
                    value="2"
                    className="input-palette"
                    onChange={this.paletteHandler}
                    checked={this.props.colorPaletteData === '2' ? true : false}
                  />

                  <label htmlFor="colorPalette2">
                    <div className="palette-colour-container">
                      <div className="palette-colour colorBox__2-1"></div>
                      <div className="palette-colour colorBox__2-2"></div>
                      <div className="palette-colour colorBox__2-3"></div>
                    </div>
                  </label>
                </div>

                <div className="palette">
                  <input
                    type={this.props.type}
                    name={this.props.name}
                    id="colorPalette3"
                    value="3"
                    className="input-palette"
                    onChange={this.paletteHandler}
                    checked={this.props.colorPaletteData === '3' ? true : false}
                  />
                  <label htmlFor="colorPalette3">
                    <div className="palette-colour-container">
                      <div className="palette-colour colorBox__3-1"></div>
                      <div className="palette-colour colorBox__3-2"></div>
                      <div className="palette-colour colorBox__3-3"></div>
                    </div>
                  </label>
                </div>

                <div className="palette">
                  <input
                    type={this.props.type}
                    name={this.props.name}
                    id="colorPalette4"
                    value="4"
                    className="input-palette"
                    checked={this.props.colorPaletteData === '4' ? true : false}
                    onChange={this.paletteHandler}
                  />

                  <label htmlFor="colorPalette4">
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

export default DesignForm;
