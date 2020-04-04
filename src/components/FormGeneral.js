import React from 'react';
import Collapsable from './Form-components/Collapsable';
import FillForm from "./Form-components/FillForm";
import ShareFormValidation from './Form-components/ShareFormValidation';
import DesignPalettes from './Form-components/DesignPalettes';


class FormGeneral extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activepanel:''
        }
      }

    render(){
        return(
            <div className="panel ">
                <Collapsable
                    title='DISEÑA'
                    styling= 'panel__coll btn-design'
                    styleIcon= 'far fa-object-ungroup'
                    activepanel= {this.props.activepanel}
                >
                <DesignPalettes styling=''/>
                </Collapsable>
                    
             

            
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

                <ShareFormValidation />
            </div>
            
        );
    }
}

export default FormGeneral;