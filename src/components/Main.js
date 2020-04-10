/* eslint-disable no-useless-constructor */
import React from 'react';
import FormGeneral from './FormGeneral';
import PreviewCard from './PreviewCard';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputValue = this.handleInputValue.bind(this)
    this.activeIcons = this.activeIcons.bind(this)

    this.state = {
      userInfo: {
        palette:'',
        name:'',
        job:'',
        photo: '',
        phone:'',
        email:'',
        linkedin:'',
        github:''
      },
      iconsInfo: {
        iconEmail: 'opacity',
        iconPhone: 'opacity',
        iconLinkedin: 'opacity',
        iconGithub: 'opacity',
      }
    }
  }

  //FUNCION PARA ACTIVAR Y DESACTIVAR ICONOS RRSS
  activeIcons(inputName, value){
    //CAMBIO ICONO EMAIL
    if (inputName === 'email'){
      if (value !== ''){
        this.setState(prevState => {
          return {
            iconsInfo: {
              ...prevState.iconsInfo,
                iconEmail: ''
              },
            }
        });
      }else {
        this.setState(prevState => {
          return {
            iconsInfo: {
              ...prevState.iconsInfo,
                iconEmail: 'opacity'
              },
            }
        });
      }
    }
    //CAMBIO ICONO TELEFONO
    if (inputName === 'phone'){
      if (value !== ''){
        this.setState(prevState => {
          return {
            iconsInfo: {
              ...prevState.iconsInfo,
                iconPhone: ''
              },
            }
        });
      }else {
        this.setState(prevState => {
          return {
            iconsInfo: {
              ...prevState.iconsInfo,
                iconPhone: 'opacity'
              },
            }
        });
      }
    }
    //CAMBIO ICONO LINKEDIN
    if (inputName === 'linkedin'){
      if (value !== ''){
        this.setState(prevState => {
          return {
            iconsInfo: {
              ...prevState.iconsInfo,
                iconLinkedin: ''
              },
            }
        });
      }else {
        this.setState(prevState => {
          return {
            iconsInfo: {
              ...prevState.iconsInfo,
                iconLinkedin: 'opacity'
              },
            }
        });
      }
    }
    //CAMBIO ICONO GITHUB
    if (inputName === 'github'){
      if (value !== ''){
        this.setState(prevState => {
          return {
            iconsInfo: {
              ...prevState.iconsInfo,
                iconGithub: ''
              },
            }
        });
      }else {
        this.setState(prevState => {
          return {
            iconsInfo: {
              ...prevState.iconsInfo,
                iconGithub: 'opacity'
              },
            }
        });
      }
    }
  }

  //FUNCION PARA RECOGER DATOS DEL INPUT Y ACTUALIZARLOS EN EL ESTADO
  handleInputValue(inputName, inputValue){
    this.setState(prevState => {
      return {
        userInfo: {
          ...prevState.userInfo,
            [inputName]:inputValue
        },
      }
    });

    this.activeIcons(inputName, inputValue);
  }

  render() {
    return (
      <main className="page__home--main container">
        <PreviewCard userName={this.state.userInfo.name}
                    userJob={this.state.userInfo.job}
                     iconEmail={this.state.iconsInfo.iconEmail}
                     iconPhone={this.state.iconsInfo.iconPhone}
                     iconLinkedin={this.state.iconsInfo.iconLinkedin}
                     iconGithub={this.state.iconsInfo.iconGithub}                      
                     />
        <FormGeneral  userName={this.state.userInfo.name}
                    userJob={this.state.userInfo.job} 
                    emailValue={this.state.userInfo.email}
                     phoneValue={this.state.userInfo.phone}
                     linkedinValue={this.state.userInfo.linkedin}
                     githubValue={this.state.userInfo.github}
                     handleInputValue={this.handleInputValue}
                    />
      </main>
    );
  }
}


export default Main;