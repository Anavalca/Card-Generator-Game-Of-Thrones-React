import React from 'react';
import '../../stylesheets/App.scss';
import ShareTwitter from './ShareTwitter';
class ShareFormValidation extends React.Component {

    render() {
        return (

            <div className="share-form-validation">
              
                <div className="panel__content display__none">
                    <button disabled type="button" className="panel__coll--child btn-create button__hover--styles" id="createCardButton">
                    <i className="far fa-address-card"></i>
                    Crear tarjeta</button>

                    <span className="error-message errorEmail">*Faltan campos por completar*</span>
                </div>

                <ShareTwitter />
            </div>
        );

    }
}

export default ShareFormValidation;