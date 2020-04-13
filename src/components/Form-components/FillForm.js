import React from "react";
import GetAvatar from "./GetAvatar";
// import CamPhoto from "./GetCameraPhoto";

class Fillform extends React.Component {
  constructor(props) {
    super(props);
    this.updateInputValue = this.updateInputValue.bind(this);

    this.state = {
      errorMessageName: 'hidden',
      errorBorderName: '',
      errorMessageJob: 'hidden',
      errorBorderJob: '',
      errorMessageEmail: 'hidden',
      errorBorderEmail: '',
      // errorMessagePhone: 'hidden',
      // errorBorderPhone: '',
      errorMessageLinkedin: 'hidden',
      errorBorderLinkedin: '',
      errorMessageGithub: 'hidden',
      errorBorderGithub: '',
    };
  }

  //RECOJO EL VALUE Y EL NAME DEL INPUT EN EL QUE ESCRIBO Y LO PASO
  //A FORMGENERAL Y LUEGO A MAIN PARA PODER CAMBIAR EL ESTADO
  updateInputValue(event) {
    let value = event.currentTarget.value;
    let name = event.currentTarget.name;

    this.formValidation(name, value)
    this.props.handleInputValue(name, value);
  }

  formValidation(name, value){
    // FUNCIONALIDAD PARA ACTIVAR MENSAJE DE ERROR EN INPUTs
    if(name === 'name'){
      if(value !== ''){
        this.setState({ errorMessageName: 'hidden', errorBorderName: ''});
      } else {
        this.setState({ errorMessageName: '', errorBorderName: 'errorBorder'});
      }

    } else if (name === 'job'){
      if(value !== ''){
        this.setState({ errorMessageJob: 'hidden', errorBorderJob: ''});
      } else {
        this.setState({ errorMessageJob: '', errorBorderJob: 'errorBorder'});
      }

      if(this.props.nameValue === ''){
        this.setState({ errorMessageName: '', errorBorderName: 'errorBorder'});
      }

    } else if (name === 'email'){
      if(value !== ''){
        this.setState({ errorMessageEmail: 'hidden', errorBorderEmail: ''});
      } else {
        this.setState({ errorMessageEmail: '', errorBorderEmail: 'errorBorder'});
      }

      if(this.props.nameValue === ''){
        this.setState({ errorMessageName: '', errorBorderName: 'errorBorder'});
      }
      if(this.props.jobValue === ''){
        this.setState({ errorMessageJob: '', errorBorderJob: 'errorBorder'});
      }

    } 
    else if (name === 'linkedin'){
      if(value !== ''){
        this.setState({ errorMessageLinkedin: 'hidden', errorBorderLinkedin: ''});
      } else {
        this.setState({ errorMessageLinkedin: '', errorBorderLinkedin: 'errorBorder'});
      }

      if(this.props.nameValue === ''){
        this.setState({ errorMessageName: '', errorBorderName: 'errorBorder'});
      }
      if(this.props.jobValue === ''){
        this.setState({ errorMessageJob: '', errorBorderJob: 'errorBorder'});
      }
      if(this.props.fillEmailValue === ''){
        this.setState({ errorMessageEmail: '', errorBorderEmail: 'errorBorder'});
      }
   
    } else if (name === 'github'){
      if(value !== ''){
        this.setState({ errorMessageGithub: 'hidden', errorBorderGithub: ''});
      } else {
        this.setState({ errorMessageGithub: '', errorBorderGithub: 'errorBorder'});
      }

      if(this.props.nameValue === ''){
        this.setState({ errorMessageName: '', errorBorderName: 'errorBorder'});
      }
      if(this.props.jobValue === ''){
        this.setState({ errorMessageJob: '', errorBorderJob: 'errorBorder'});
      }
      if(this.props.fillEmailValue === ''){
        this.setState({ errorMessageEmail: '', errorBorderEmail: 'errorBorder'});
      }

      if(this.props.linkedinValue === ''){
        this.setState({ errorMessageLinkedin: '', errorBorderLinkedin: 'errorBorder'});
      }
    } 
}

  render() {
    const hideStyle = {
      display: this.props.activePanel,
    };

    return (
      <div
        className="panel__content display__none"
        style={hideStyle}
        id="form__fill"
      >
        <div className="fill-form">
          <form className="fill" id="myForm" action="/signup" method="post">
            <label htmlFor="name">
              Nombre Completo
              <span className='mandatory'>*</span>
            </label>
            <input
              placeholder="Ej: Sally Jill"
              id="name"
              type="text"
              name="name"
              value={this.props.nameValue}
              onChange={this.updateInputValue}
              className={this.state.errorBorderName}
            />
            <span className={`input-error ${this.state.errorMessageName}`}>*Faltan campos por completar*</span>

            <label htmlFor="job">
              Puesto
              <span className='mandatory'>*</span>
            </label>
            <input
              placeholder="Ej: Front-end Devoloper"
              id="job"
              type="text"
              name="job"
              value={this.props.jobValue}
              onChange={this.updateInputValue}
              className={this.state.errorBorderJob}
            />
            <span className={`input-error ${this.state.errorMessageJob}`}>*Faltan campos por completar*</span>

            <GetAvatar
              photo={this.props.photo}
              isAvatarDefault={this.props.isAvatarDefault}
              updateAvatar={this.props.updateAvatar}
            />
            

            <div
              id="empty-box"
              className="empty-box"
              style={{ backgroundImage: `url(${this.props.photo})` }}
            ></div>
            {/* <GetCameraPhoto /> */}
            <button id="cameraButton" className="button__hover--styles">
              ¡Hazte una foto!
            </button>

            <label htmlFor="email">
              Email
              <span className='mandatory'>*</span>
            </label>
            <input
              placeholder="Ej: sally-hill@gmail.com"
              name="email"
              id="email"
              // className="inputinput"
              className={this.state.errorBorderEmail}
              type="email"
              value={this.props.fillEmailValue}
              onChange={this.updateInputValue}
            />
            <span className={`input-error ${this.state.errorMessageEmail}`}>*Faltan campos por completar*</span>

            <label htmlFor="phone">
            Teléfono
            </label>
            <input
              placeholder="Ej: 555-55-55-55"
              name="phone"
              id="phone"
              // className="input_icon input"
              className={this.state.errorBorderPhone}
              type="tel"
              value={this.props.phoneValue}
              onChange={this.updateInputValue}
            />

            <label htmlFor="linkedin">
              Linkedin
              <span className='mandatory'>*</span>
            </label>
            <input
              placeholder="Ej: linkedin.com/in/sally.hill"
              name="linkedin"
              id="linkedin"
              // className="inputinput"
              className={this.state.errorBorderLinkedin}
              type="text"
              value={this.props.linkedinValue}
              onChange={this.updateInputValue}
            />
            <span className={`input-error ${this.state.errorMessageLinkedin}`}>*Faltan campos por completar*</span>

            <label htmlFor="github">
              Github
              <span className='mandatory'>*</span>
            </label>
            <input
              placeholder="Ej: @sally-hill"
              name="github"
              id="github"
              // className="inputinput"
              className={this.state.errorBorderGithub}
              type="text"
              value={this.props.githubValue}
              onChange={this.updateInputValue}
            />
            <span className={`input-error ${this.state.errorMessageGithub}`}>*Faltan campos por completar*</span>
          </form>
        </div>
      </div>
    );
  }
}

export default Fillform;
