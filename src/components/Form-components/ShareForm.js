import React from "react";
import "../../stylesheets/App.scss";
import ShareTwitter from "./ShareTwitter";
import Loader from "./Loader";

class ShareForm extends React.Component {
  constructor(props) {
    super(props);
    this.fetchCardData = this.fetchCardData.bind(this);
  }

  fetchCardData(event) {
    if (this.props.availableButton === "available") {
      this.props.fetchCardData();
    } else {
      event.preventDefault();
    }
  }

  render() {
    const hideStyle = {
      display: this.props.activePanel,
    };
    const active = this.props.availableButton;
    const cardURL = this.props.cardURL;
    const cardSuccess = this.props.cardSuccess;
    return (
      <div className="panel__content display__none" style={hideStyle}>
        <div className="share-form-validation">
          <button
            onClick={this.fetchCardData}
            type="button"
            className={`panel__coll--child btn-create ${this.props.availableButton}`}
            id="createCardButton"
          >
            <i className="far fa-address-card"></i>
            Crear tarjeta
          </button>
          {this.props.isLoading !== false ? (
            <Loader />
          ) : (
            <React.Fragment>
              <span
                className={`${
                  active !== "disable" ? "hidden" : "error-message"
                }`}
              >
                *Faltan campos por completar*
              </span>
              <p
                className={`error-message ${
                  cardSuccess === false ? "" : " hidden"
                }`}
              >
                ERROR
              </p>
              <div
                className={`form__create-link ${
                  cardSuccess === true ? "" : " hidden"
                }`}
                id="share-div"
              >
                <div className="share__create-card">
                  <p>La tarjeta ha sido creada:</p>
                  <a href={cardURL} target="_blank" rel="noopener noreferrer">
                    <p className="share__create-card--text">{cardURL}</p>
                  </a>
                </div>
              </div>

              <ShareTwitter cardSuccess={cardSuccess} cardURL={cardURL} />
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }
}

export default ShareForm;
