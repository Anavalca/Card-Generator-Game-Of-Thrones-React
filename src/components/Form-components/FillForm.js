/* eslint-disable no-useless-constructor */
import React from "react";
import GetAvatar from "./GetAvatar";
// import CamPhoto from "./GetCameraPhoto";

class Fillform extends React.Component {

  constructor(props) {
    super(props);
    this.updateInputValue = this.updateInputValue.bind(this)
  }


  //RECOJO EL VALUE Y EL NAME DEL INPUT EN EL QUE ESCRIBO Y LO PASO
  //A FORMGENERAL Y LUEGO A MAIN PARA PODER CAMBIAR EL ESTADO
  updateInputValue(event){
    let value = event.currentTarget.value;
    let name = event.currentTarget.name;
    this.props.handleInputValue(name, value);
  }
  
  render() {
    const hideStyle = {
      display: this.props.activePanel,
    };
    
    return (
      <div className="panel__content display__none" style={hideStyle} id="form__fill">
        <div className="fill-form" >
          <form className="fill" id="myForm" action="/signup" method="post">
            <label htmlFor="name">
              Nombre Completo
              <span>*</span>
            </label>
            <input
              placeholder="Ej: Sally Jill"
              id="name"
              type="text"
              name="name"
              value={this.props.nameValue}
              onChange={this.updateInputValue}
            />

            <label htmlFor="job">
              Puesto
              <span>*</span>
            </label>
            <input
              placeholder="Ej: Front-end Devoloper"
              id="job"
              type="text"
              name="job"
              value={this.props.jobValue}
              onChange={this.updateInputValue}
            />

              <GetAvatar />

            <div id="empty-box" className="empty-box"></div>
            {/* <GetCameraPhoto /> */}
            <button id="cameraButton" class="button__hover--styles">
              ¡Hazte una foto!
            </button>

            <label htmlFor="email">
              Email
              <span>*</span>
            </label>
            <input
              placeholder="Ej: sally-hill@gmail.com"
              name="email"
              id="email"
              className="inputinput"
              type="email"
              value={this.props.fillEmailValue}
              onChange={this.updateInputValue}
            />

            <label htmlFor="phone">
              Teléfono
              <span>*</span>
            </label>
            <input
              placeholder="Ej: 555-55-55-55"
              name="phone"
              id="phone"
              className="input_icon input"
              type="tel"
              value={this.props.phoneValue}
              onChange={this.updateInputValue}
            />

            <label htmlFor="linkedin">
              Linkedin
              <span>*</span>
            </label>
            <input
              placeholder="Ej: linkedin.com/in/sally.hill"
              name="linkedin"
              id="linkedin"
              className="inputinput"
              type="text"
              value={this.props.linkedinValue}
              onChange={this.updateInputValue}
            />

            <label htmlFor="github">
              Github
              <span>*</span>
            </label>
            <input
              placeholder="Ej: @sally-hill"
              name="github"
              id="github"
              className="inputinput"
              type="text"
              value={this.props.githubValue}
              onChange={this.updateInputValue}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Fillform;
