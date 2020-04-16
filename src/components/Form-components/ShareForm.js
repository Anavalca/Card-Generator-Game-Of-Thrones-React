import React from "react";
import "../../stylesheets/App.scss";
import ShareTwitter from "./ShareTwitter";

class ShareFormValidation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const hideStyle = {
      display: this.props.activePanel,
    };

    return (
      <div className="panel__content display__none" style={hideStyle}>
        <div className="share-form-validation">
          {/* <div className="panel__content display__none"> */}
          {/* //cuando pongamos el estado de inicio del button disabled quitamos important de css*/}
          <button
            disabled
            type="button"
            className="panel__coll--child btn-create button__hover--styles"
            id="createCardButton"
          >
            <i className="far fa-address-card"></i>
            Crear tarjeta
          </button>

          <span className="error-message errorEmail">
            *Faltan campos por completar*
          </span>
          {/* </div> */}

          <ShareTwitter />
        </div>
      </div>
    );
  }
}

export default ShareFormValidation;
