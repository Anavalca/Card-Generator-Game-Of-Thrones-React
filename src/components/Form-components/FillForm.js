import React from "react";
// import CamPhoto from "./GetCameraPhoto";

class Fillform extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: "",
  //     job: "",
  //     // photo:'',
  //     email: "",
  //     phone: "",
  //     linkedin: "",
  //     github: ""
  //   };
  // }

  render() {
    // const { name, job, email, phone, linkedin, github } = this.state;
    const hideStyle = {
      display: this.props.activePanel,
    };
    return (
      <div className={`panel__content panel__content--design display__none`} style={hideStyle} id="form__design" >
        <div className="fill-form" >
          <form className="fill" id="myForm" action="/signup" method="post">
            <label for="name">
              Nombre Completo
              <span>*</span>
            </label>
            <input
              placeholder="Ej: Sally Jill"
              id="name"
              type="text"
              name="name"
            />

            <label for="job">
              Puesto
              <span>*</span>
            </label>
            <input
              placeholder="Ej: Front-end unicorn"
              id="job"
              type="text"
              name="job"
            />

            <label for="fillButton">
              Imagen de Perfil<span>*</span>
            </label>
            <button
              id="fillButton"
              type="button"
              className="button__hover--styles"
            >
              Añadir imagen
            </button>
            <input
              type="file"
              name="photo"
              id="img-selector"
              className="hidden-field"
            />

            <div id="empty-box" className="empty-box"></div>
            {/* <GetCameraPhoto /> */}
            <button id="cameraButton" class="button__hover--styles">
              ¡Hazte una foto!
            </button>

            <label for="email">
              Email
              <span>*</span>
            </label>
            <input
              placeholder="Ej: sally-hill@gmail.com"
              id="email"
              className="inputinput"
              type="email"
            />

            <label for="phone">
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

            <label for="linkedin">
              Linkedin
              <span>*</span>
            </label>
            <input
              placeholder="Ej: linkedin.com/in/sally.hill"
              id="linkedin"
              className="inputinput"
              type="text"
            />

            <label for="github">
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
