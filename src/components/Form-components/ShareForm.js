import React from 'react';
import '../../stylesheets/App.scss';
import ShareTwitter from './ShareTwitter';
import Loader from './Loader';

const ShareForm = (props) => {

  const fetchCardData = (event) => {
    if (props.availableButton === 'available') {
      props.fetchCardData();
    } else {
      event.preventDefault();
    }
  }


  const hideStyle = {
    display: props.activePanel,
  };

  const active = props.availableButton;
  const cardURL = props.cardURL;
  const cardSuccess = props.cardSuccess;

  return (
    <div className="panel__content display__none" style={hideStyle}>
      <div className="share-form-validation">
        <button
          onClick={fetchCardData}
          type="button"
          className={`panel__coll--child btn-create ${props.availableButton}`}
          id="createCardButton"
        >
          <i className="far fa-address-card"></i>
            Crear tarjeta
          </button>
        {props.isLoading !== false ? (
          <Loader />
        ) : (
            <React.Fragment>
              <span
                className={`${
                  active !== 'disable' ? 'hidden' : 'error-message'
                  }`}
              >
                *Faltan campos por completar*
              </span>
              <p
                className={`error-message ${
                  cardSuccess === false ? '' : ' hidden'
                  }`}
              >
                ERROR
              </p>
              <div
                className={`form__create-link ${
                  cardSuccess === true ? '' : ' hidden'
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

export default ShareForm;
