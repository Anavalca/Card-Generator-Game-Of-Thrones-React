import React from 'react';
import Collapsable from './Form-components/Collapsable';
import DesignForm from "./Form-components/DesignForm";
import FillForm from "./Form-components/FillForm";
// import ShareFormValidation from './Form-components/ShareFormValidation';

class FormGeneral extends React.Component {
    render(){
        return(
            <div className="panel ">
                <Collapsable
                    title='DISEÑA'
                    styling= 'panel__coll btn-design'
                    styleIcon= 'far fa-object-ungroup'
                />

            <DesignForm />
       

                <Collapsable
                    title='RELLENA'
                    styling= 'panel__coll font__form btn-fill'
                    styleIcon= 'far fa-keyboard'
                />

            <FillForm />

                <Collapsable
                    title='COMPARTE'
                    styling= 'panel__coll btn-share'
                    styleIcon= 'fas fa-share-alt'
                />

                {/* // Parte de comparte */}
            </div>
            
        );
    }
}

export default FormGeneral;