import React from 'react';
import Collapsable from './Form-components/Collapsable';
// import DesignForm from './Form-components/DesignForm';
// import FillForm from './Form-components/FillForm';
// import ShareFormValidation from './Form-components/ShareFormValidation';

class FormGeneral extends React.Component {
    render(){
        return(
            //body
            <div className="panel">
                <Collapsable
                    tittle='DISEÑA'
                    styling= 'panel__coll btn-design'
                    styleIcon= 'far fa-object-ungroup'
                />

                {/* Parte de diseña */}

                <Collapsable
                    tittle='RELLENA'
                    styling= 'panel__coll font__form btn-fill'
                    styleIcon= 'far fa-keyboard'
                />

                {/* //Parte de rellena */}

                <Collapsable
                    tittle='COMPARTE'
                    styling= 'panel__coll btn-share'
                    styleIcon= 'fas fa-share-alt'
                />

                {/* // Parte de comparte */}
            </div>

            
        );
    }
}

export default FormGeneral;