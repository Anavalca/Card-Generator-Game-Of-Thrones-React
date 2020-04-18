import React from "react";
import "../../stylesheets/App.scss";
// import ShareTwitter from "./ShareTwitter";

class ShareForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props)
  }

  render() {
    const hideStyle = {
      display: this.props.activePanel,
    };
    const active = this.props.availableButton;
    return (
      <div className="panel__content display__none" style={hideStyle}>
        <div className="share-form-validation">

          <button 
            type="button" 
            className={`panel__coll--child btn-create ${this.props.availableButton}`} id="createCardButton"
            >

            <i className="far fa-address-card"></i>
            Crear tarjeta
          </button>

          <span 
          className= {`${active !== 'disable' ? 'hidden' : 'error-message' }`} >

            *Faltan campos por completar*
          </span>

          {/* <ShareTwitter /> */}
        </div>
      </div>
    );
  }
}

export default ShareForm;
