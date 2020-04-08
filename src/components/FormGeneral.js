import React from 'react';
import Collapsable from './Form-components/Collapsable';
import DesignForm from './Form-components/DesignForm';
import FillForm from "./Form-components/FillForm";
import ShareFormValidation from './Form-components/ShareFormValidation';

class FormGeneral extends React.Component {
    constructor(props) {
        super(props);
        this.handleStates = this.handleStates.bind(this)

        this.state = {
            activePanel1: 'none',
            activePanel2: 'none',
            activePanel3: 'none',
            rotate1: '',
            rotate2: '',
            rotate3: '',
        }
    }

    handleStates(form){
        let resultState;
        
        if(form === 'form1'){
            if(this.state.activePanel1 === 'inherit'){
              resultState = 'none';
              this.setState({rotate1: ''});
            }
            else{
              resultState = 'inherit';
              this.setState({rotate1: 'active'});
              this.setState({rotate2: ''});
              this.setState({rotate3: ''});
            }
            this.setState({activePanel1: resultState})
            this.setState({activePanel2: 'none'});
            this.setState({activePanel3: 'none'});


        }else if(form === "form2"){
            if(this.state.activePanel2 === 'inherit'){
                resultState = 'none';
                this.setState({rotate2: ''});
            }
            else{
                resultState = 'inherit';
                this.setState({rotate2: 'active'});
                this.setState({rotate1: ''});
                this.setState({rotate3: ''});
            }
            this.setState({activePanel1: 'none'});
            this.setState({activePanel2: resultState});
            this.setState({activePanel3: 'none'});
            
        }else if(form === "form3"){
            if(this.state.activePanel3 === 'inherit'){
                resultState = 'none';
                this.setState({rotate3: ''});
            }
            else{
                resultState = 'inherit';
                this.setState({rotate3: 'active'});
                this.setState({rotate2: ''});
                this.setState({rotate1: ''});
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
                    styling={`panel__coll btn-design ${this.state.rotate1}`}
                    styleIcon= 'far fa-object-ungroup' 
                    handleFuntion = {this.handleStates} >

                    <DesignForm activePanel={this.state.activePanel1}/>
                    
                </Collapsable>
                    
                <Collapsable
                    id='form2'
                    title='RELLENA'
                    styling= {`panel__coll btn-fill ${this.state.rotate2}`}
                    styleIcon= 'far fa-keyboard'
                    handleFuntion = {this.handleStates} >

                    <FillForm 
                        activePanel={this.state.activePanel2}
                        handleImage={this.handleImage}
                       />
                </Collapsable>

                <Collapsable
                    id='form3'
                    title='COMPARTE'
                    styling= {`panel__coll btn-share ${this.state.rotate3}`}
                    styleIcon= 'fas fa-share-alt'
                    handleFuntion = {this.handleStates} >
                
                    <ShareFormValidation activePanel={this.state.activePanel3}/>
                </Collapsable>

            </div>
            
        );
    }
}

export default FormGeneral;