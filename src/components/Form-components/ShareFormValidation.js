import React from 'react';
import '../../stylesheets/App.scss';
import ShareTwitter from './ShareTwitter';


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
                
                    <div className="panel__content display__none">
                        
                        <button type="button" className={`panel__coll--child btn-create ${!aviableButton === true ? 'disable' : 'active' }`} id="createCardButton">
        
        
                        <i className="far fa-address-card"></i>
                        Crear tarjeta</button>

                        <span className= {`error-message errorEmail ${!aviableButton === true ? '' : 'hidden' }`} >*Faltan campos por completar*</span>
                    </div>

                    <ShareTwitter />
                </div>
            </div>
        );

    }
}

export default ShareFormValidation;