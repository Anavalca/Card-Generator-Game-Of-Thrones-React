/* eslint-disable no-useless-constructor */
import React from "react";
import GetAvatar from "./GetAvatar";
// import CamPhoto from "./GetCameraPhoto";

class Fillform extends React.Component {
   constructor(props) {
     super(props);
  
   }

  render() {
    // const { name, job, email, phone, linkedin, github } = this.state;
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
            />

            <label htmlFor="job">
              Puesto
              <span>*</span>
            </label>
            <input
              placeholder="Ej: Front-end unicorn"
              id="job"
              type="text"
              name="job"
            />

              <GetAvatar 
                photo={this.props.photo}
                handleImage={this.props.handleImage}/>

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
              id="email"
              className="inputinput"
              type="email"
            />

            <label htmlFor="phone">
              Teléfono
              <span>*</span>
            </label>
            <input
              placeholder="Ej: 555-55-55-55"
              id="phone"
              className="input_icon input"
              type="tel"
              name="phone"
            />

            <label htmlFor="linkedin">
              Linkedin
              <span>*</span>
            </label>
            <input
              placeholder="Ej: linkedin.com/in/sally.hill"
              id="linkedin"
              className="inputinput"
              type="text"
            />

            <label htmlFor="github">
              Github
              <span>*</span>
            </label>
            <input
              placeholder="Ej: @sally-hill"
              id="github"
              className="inputinput"
              type="text"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Fillform;
