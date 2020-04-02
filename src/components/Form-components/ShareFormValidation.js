import React from 'react';
import './_form-share.scss';

class ShareFormValidation extends React.Component {

    render() {
        return (

            <div className="share-form-validation">
                <button type="button" className="panel__coll btn-share"><i class="fas fa-share-alt"></i>Comparte</button>
                <div class="panel__content display__none">
                    <button disabled type="button" class="panel__coll--child btn-create button__hover--styles" id="createCardButton"><i
                        class="far fa-address-card"></i>Crear tarjeta</button>

                    <span className="error-message errorEmail">*Faltan campos por completar*</span>
                </div>
            </div>
        );

    }
}

export default ShareFormValidation;