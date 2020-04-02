import React from 'react';
import './_form-share.scss';

class ShareTwitter extends React.Component {
    render() {
        return (

            <div className="panel__content2 hidden">
                <p id="success-message" className="success-message display__none">La tarjeta ha sido creada:</p>
                <a className="print__url--twitter" href='' target="local"></a>
                <a type="button" class="btn-twit button__hover--styles display__none" target="local">
            
                    <i class="fab fa-twitter" href=""></i>Compartir en Twitter</a>
            </div>

        );
    }
}


export default ShareTwitter;