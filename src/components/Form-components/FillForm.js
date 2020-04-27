import React from "react";
import GetAvatar from "./GetAvatar";
import GetCameraPhoto from "./GetCameraPhoto";
import defaultImageDarkMode from "../../images/jonsnow.gif";
import PropTypes from "prop-types";

class FillForm extends React.Component {
  constructor(props) {
    super(props);
    this.updateInputValue = this.updateInputValue.bind(this);
    this.toggleCamera = this.toggleCamera.bind(this);
    this.saveScreenshot = this.saveScreenshot.bind(this);

    this.state = {
      errorMessageName: "hidden",
      errorBorderName: "",
      errorMessageJob: "hidden",
      errorBorderJob: "",
      errorMessageEmail: "hidden",
      errorBorderEmail: "",
      errorMessageLinkedin: "hidden",
      errorBorderLinkedin: "",
      errorMessageGithub: "hidden",
      errorBorderGithub: "",
      errorMessagePhoto: "hidden",
      camera: true,
    };
  }

  //GET VALUE AND NAME FROM INPUT TO SEND FORMGENERAL AND MAIN TO CHANGE STATE.
  updateInputValue(event) {
    let value = event.currentTarget.value;
    let name = event.currentTarget.name;

    this.formValidation(name, value);
    this.props.handleInputValue(name, value);
  }

  toggleCamera() {
    this.setState((prevState) => ({
      camera: !prevState.camera,
    }));
  }

  saveScreenshot(screenshot) {
    let photoCamera = screenshot;
    this.props.saveScreenshot(photoCamera);
  }

  formValidation(name, value) {
    //ACTIVATE ERROR MSG IN INPUTS
    if (name === "name") {
      if (value !== "") {
        this.setState({ errorMessageName: "hidden", errorBorderName: "" });
      } else {
        this.setState({ errorMessageName: "", errorBorderName: "errorBorder" });
      }
    } else if (name === "job") {
      if (value !== "") {
        this.setState({ errorMessageJob: "hidden", errorBorderJob: "" });
      } else {
        this.setState({ errorMessageJob: "", errorBorderJob: "errorBorder" });
      }

      if (this.props.nameValue === "") {
        this.setState({ errorMessageName: "", errorBorderName: "errorBorder" });
      }
    } else if (name === "email") {
      if (value !== "" && value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
        this.setState({ errorMessageEmail: "hidden", errorBorderEmail: "" });
      } else {
        this.setState({
          errorMessageEmail: "",
          errorBorderEmail: "errorBorder",
        });
      }

      if (this.props.nameValue === "") {
        this.setState({ errorMessageName: "", errorBorderName: "errorBorder" });
      }
      if (this.props.jobValue === "") {
        this.setState({ errorMessageJob: "", errorBorderJob: "errorBorder" });
      }
      if (this.props.photo === "/static/media/daenerys.5e8e49e3.gif") {
        this.setState({ errorMessagePhoto: "" });
      }
    } else if (name === "linkedin") {
      if (value !== "") {
        this.setState({
          errorMessageLinkedin: "hidden",
          errorBorderLinkedin: "",
        });
      } else {
        this.setState({
          errorMessageLinkedin: "",
          errorBorderLinkedin: "errorBorder",
        });
      }

      if (this.props.nameValue === "") {
        this.setState({ errorMessageName: "", errorBorderName: "errorBorder" });
      }
      if (this.props.jobValue === "") {
        this.setState({ errorMessageJob: "", errorBorderJob: "errorBorder" });
      }

      if (
        this.props.fillEmailValue === "" ||
        !this.props.fillEmailValue.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
      ) {
        this.setState({
          errorMessageEmail: "",
          errorBorderEmail: "errorBorder",
        });
      }
    } else if (name === "github") {
      if (value !== "") {
        this.setState({ errorMessageGithub: "hidden", errorBorderGithub: "" });
      } else {
        this.setState({
          errorMessageGithub: "",
          errorBorderGithub: "errorBorder",
        });
      }

      if (this.props.nameValue === "") {
        this.setState({ errorMessageName: "", errorBorderName: "errorBorder" });
      }
      if (this.props.jobValue === "") {
        this.setState({ errorMessageJob: "", errorBorderJob: "errorBorder" });
      }

      if (
        this.props.fillEmailValue === "" ||
        !this.props.fillEmailValue.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
      ) {
        this.setState({
          errorMessageEmail: "",
          errorBorderEmail: "errorBorder",
        });
      }

      if (this.props.linkedinValue === "") {
        this.setState({
          errorMessageLinkedin: "",
          errorBorderLinkedin: "errorBorder",
        });
      }
    }
  }

  submitHandler(evt) {
    evt.preventDefault();
  }

  render() {
    const hideStyle = {
      display: this.props.activePanel,
    };

    const {
      errorBorderName,
      errorBorderJob,
      errorBorderEmail,
      errorBorderLinkedin,
      errorBorderGithub,
      errorMessagePhoto,
      errorBorderPhone,
      errorMessageName,
      errorMessageJob,
      errorMessageEmail,
      errorMessageGithub,
      errorMessageLinkedin,
      camera,
    } = this.state;

    const {
      nameValue,
      jobValue,
      photo,
      fillEmailValue,
      phoneValue,
      linkedinValue,
      githubValue,
      isAvatarDefault,
      updateAvatar,
      validAvatar,
      darkModeValue,
    } = this.props;

    return (
      <div
        className="panel__content display__none"
        style={hideStyle}
        id="form__fill"
      >
        <div className="fill-form">
          <form
            className="fill"
            id="myForm"
            action="/signup"
            method="post"
            onSubmit={this.submitHandler}
          >
            <label htmlFor="name">
              Nombre Completo
              <span className="mandatory">*</span>
            </label>
            <input
              placeholder="Ej: Daenerys Targaryen"
              id="name"
              type="text"
              name="name"
              value={nameValue}
              onChange={this.updateInputValue}
              className={errorBorderName}
            />
            <span className={`input-error ${errorMessageName}`}>
              *Faltan campos por completar*
            </span>

            <label htmlFor="job">
              Puesto
              <span className="mandatory">*</span>
            </label>
            <input
              placeholder="Ej: Madre de dragones"
              id="job"
              type="text"
              name="job"
              value={jobValue}
              onChange={this.updateInputValue}
              className={errorBorderJob}
            />
            <span className={`input-error ${errorMessageJob}`}>
              *Faltan campos por completar*
            </span>

            <GetAvatar
              photo={photo}
              isAvatarDefault={isAvatarDefault}
              updateAvatar={updateAvatar}
            />

            <div
              id="empty-box"
              className="empty-box"
              style={
                darkModeValue !== false && photo.length <= 35
                  ? { backgroundImage: `url(${defaultImageDarkMode})` }
                  : { backgroundImage: `url(${photo})` }
              }
            ></div>

            <div>
              <button
                type="button"
                className="button__hover--styles"
                onClick={this.toggleCamera}
              >
                ¡Hazte una foto!
              </button>

              <div className={camera ? "hiddenCamera" : ""}>
                <GetCameraPhoto saveScreenshot={this.saveScreenshot} />
              </div>
            </div>
            <span
              className={`input-error ${errorMessagePhoto} ${
                validAvatar === true ? "hidden" : ""
              }`}
            >
              ¡No olvides subir tu foto!
            </span>

            <label htmlFor="email">
              Email
              <span className="mandatory">*</span>
            </label>
            <input
              placeholder="Ej: madrededragones@gmail.com"
              name="email"
              id="email"
              className={errorBorderEmail}
              type="email"
              value={fillEmailValue}
              onChange={this.updateInputValue}
            />
            <span className={`input-error ${errorMessageEmail}`}>
              *Faltan campos por completar*
            </span>

            <label htmlFor="phone">Teléfono</label>
            <input
              placeholder="Ej: 555-55-55-55"
              name="phone"
              id="phone"
              className={errorBorderPhone}
              type="tel"
              value={phoneValue}
              onChange={this.updateInputValue}
            />

            <label htmlFor="linkedin">
              Linkedin
              <span className="mandatory">*</span>
            </label>
            <input
              placeholder="Ej: linkedin.com/in/Daenerys-Targaryen"
              name="linkedin"
              id="linkedin"
              className={errorBorderLinkedin}
              type="text"
              value={linkedinValue}
              onChange={this.updateInputValue}
            />
            <span className={`input-error ${errorMessageLinkedin}`}>
              *Faltan campos por completar*
            </span>

            <label htmlFor="github">
              Github
              <span className="mandatory">*</span>
            </label>
            <input
              placeholder="Ej: @DaenerysTargaryen"
              name="github"
              id="github"
              className={errorBorderGithub}
              type="text"
              value={githubValue}
              onChange={this.updateInputValue}
            />
            <span className={`input-error ${errorMessageGithub}`}>
              *Faltan campos por completar*
            </span>
          </form>
        </div>
      </div>
    );
  }
}

/* Fillform.propTypes = {
  nameValue: PropTypes.string.isRequired,
  jobValue: PropTypes.string.isRequired,
  fillEmailValue: PropTypes.string.isRequired,
  linkedinValue: PropTypes.string.isRequired,
  githubValue: PropTypes.string.isRequired,
  updateAvatar: PropTypes.func,
  darkModeValue: PropTypes.bool,
}; */

export default FillForm;
