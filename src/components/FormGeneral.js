import React from 'react';
import Collapsable from './Form-components/Collapsable';
import FillForm from "./Form-components/FillForm";
import ShareFormValidation from './Form-components/ShareFormValidation';
import DesignPalettes from './Form-components/DesignPalettes';


class FormGeneral extends React.Component {
    constructor(props) {
        super(props);
        this.handleStates = this.handleStates.bind(this)

        this.state = {
            activePanel1: 'none',
            activePanel2: 'none',
            activePanel3: 'none',
        }
    }

    handleStates(form){
        let resultState;
        
        if(form === 'form1'){
            if(this.state.activePanel1 === 'inherit'){
              resultState = 'none';
            }
            else{
              resultState = 'inherit';
            }
            this.setState({activePanel1: resultState})
            this.setState({activePanel2: 'none'});
            this.setState({activePanel3: 'none'});

        }else if(form === "form2"){
            if(this.state.activePanel2 === 'inherit'){
                resultState = 'none';
            }
            else{
                resultState = 'inherit';
            }
            this.setState({activePanel1: 'none'});
            this.setState({activePanel2: resultState});
            this.setState({activePanel3: 'none'});
            
        }else if(form === "form3"){
            if(this.state.activePanel3 === 'inherit'){
                resultState = 'none';
            }
            else{
                resultState = 'inherit';
            }
            this.setState({activePanel1: 'none'});
            this.setState({activePanel2: 'none'});
            this.setState({activePanel3: resultState});
        }
    }


    render(){
        return(
            <div className="panel ">
                <Collapsable 
                    id='form1'
                    title='DISEÑA'
                    styling= 'panel__coll btn-design'
                    styleIcon= 'far fa-object-ungroup' 
                    handleFuntion = {this.handleStates} >

                    <DesignPalettes activePanel={this.state.activePanel1}/>
                    
                </Collapsable>
                    
                <Collapsable
                    id='form2'
                    title='RELLENA'
                    styling= 'panel__coll font__form btn-fill'
                    styleIcon= 'far fa-keyboard'
                    handleFuntion = {this.handleStates} >

                    <FillForm activePanel={this.state.activePanel2}/>
                </Collapsable>

                <Collapsable
                    title='COMPARTE'
                    styling= 'panel__coll btn-share'
                    styleIcon= 'fas fa-share-alt'
                    handleFuntion = {this.handleStates} >
                
                    <ShareFormValidation activePanel={this.state.activePanel3}/>
                
                </Collapsable>

            </div>
            
        );
    }
}

export default FormGeneral;