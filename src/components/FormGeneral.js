import React from 'react';
import Collapsable from './Form-components/Collapsable';
import DesignForm from './Form-components/DesignForm';
import FillForm from './Form-components/FillForm';
import ShareForm from './Form-components/ShareForm';
import PropTypes from 'prop-types';

class FormGeneral extends React.Component {
  constructor(props) {
    super(props);
    this.handleStates = this.handleStates.bind(this);
    this.handleInputValue = this.handleInputValue.bind(this);
    this.saveScreenshot = this.saveScreenshot.bind(this);
    this.fetchCardData = this.fetchCardData.bind(this);

    this.state = {
      activePanel1: 'none',
      activePanel2: 'none',
      activePanel3: 'none',
      rotate1: '',
      rotate2: '',
      rotate3: '',
    };
  }

  //COLLAPSABLES AND ARROWS
  handleStates(form) {
    let resultState;

    if (form === 'form1') {
      if (this.state.activePanel1 === 'inherit') {
        resultState = 'none';
        this.setState({ rotate1: '' });
      } else {
        resultState = 'inherit';
        this.setState({ rotate1: 'active' });
        this.setState({ rotate2: '' });
        this.setState({ rotate3: '' });
      }
      this.setState({ activePanel1: resultState });
      this.setState({ activePanel2: 'none' });
      this.setState({ activePanel3: 'none' });
    } else if (form === 'form2') {
      if (this.state.activePanel2 === 'inherit') {
        resultState = 'none';
        this.setState({ rotate2: '' });
      } else {
        resultState = 'inherit';
        this.setState({ rotate2: 'active' });
        this.setState({ rotate1: '' });
        this.setState({ rotate3: '' });
      }
      this.setState({ activePanel1: 'none' });
      this.setState({ activePanel2: resultState });
      this.setState({ activePanel3: 'none' });
    } else if (form === 'form3') {
      if (this.state.activePanel3 === 'inherit') {
        resultState = 'none';
        this.setState({ rotate3: '' });
      } else {
        resultState = 'inherit';
        this.setState({ rotate3: 'active' });
        this.setState({ rotate2: '' });
        this.setState({ rotate1: '' });
      }
      this.setState({ activePanel1: 'none' });
      this.setState({ activePanel2: 'none' });
      this.setState({ activePanel3: resultState });
    }
  }

  handleInputValue(inputName, inputValue) {
    this.props.handleInputValue(inputName, inputValue);
  }

  saveScreenshot(photoCamera) {
    let screenshot = photoCamera;
    this.props.saveScreenshot(screenshot);
  }

  fetchCardData() {
    this.props.fetchCardData();
  }

  render() {
    const {
      rotate1,
      rotate2,
      rotate3,
      activePanel1,
      activePanel2,
      activePanel3,
    } = this.state;
    const {
      paletteHandler,
      colorPaletteData,
      userName,
      userJob,
      photo,
      isAvatarDefault,
      validAvatar,
      updateAvatar,
      emailValue,
      phoneValue,
      linkedinValue,
      githubValue,
      handleInputValue,
      darkModeValue,
      cardSuccess,
      cardURL,
      availableButton,
      isLoading,
    } = this.props;

    return (
      <div className="panel ">
        <Collapsable
          id="form1"
          title="DISEÑA"
          styling={`panel__coll btn-design ${rotate1}`}
          styleIcon="far fa-object-ungroup"
          handleFunction={this.handleStates}
        >
          <DesignForm
            activePanel={activePanel1}
            name="palette"
            type="radio"
            paletteHandler={paletteHandler}
            colorPaletteData={colorPaletteData}
          />
        </Collapsable>

        <Collapsable
          id="form2"
          title="RELLENA"
          styling={`panel__coll btn-fill ${rotate2}`}
          styleIcon="far fa-keyboard"
          handleFunction={this.handleStates}
        >
          <FillForm
            activePanel={activePanel2}
            nameValue={userName}
            jobValue={userJob}
            photo={photo}
            isAvatarDefault={isAvatarDefault}
            validAvatar={validAvatar}
            updateAvatar={updateAvatar}
            saveScreenshot={this.saveScreenshot}
            fillEmailValue={emailValue}
            phoneValue={phoneValue}
            linkedinValue={linkedinValue}
            githubValue={githubValue}
            handleInputValue={handleInputValue}
            darkModeValue={darkModeValue}
          />
        </Collapsable>

        <Collapsable
          id="form3"
          title="COMPARTE"
          styling={`panel__coll btn-share ${rotate3}`}
          styleIcon="fas fa-share-alt"
          handleFunction={this.handleStates}
        >
          <ShareForm
            activePanel={activePanel3}
            fetchCardData={this.fetchCardData}
            cardSuccess={cardSuccess}
            cardURL={cardURL}
            availableButton={availableButton}
            isLoading={isLoading}
          />
        </Collapsable>
      </div>
    );
  }
}

FormGeneral.propTypes = {
  paletteHandler: PropTypes.func,
  colorPaletteData: PropTypes.string,
  userName: PropTypes.string,
  userJob: PropTypes.string,
  updateAvatar: PropTypes.func,
  saveScreenshot: PropTypes.func,
  emailValue: PropTypes.string,
  linkedinValue: PropTypes.string,
  githubValue: PropTypes.string,
  handleInputValue: PropTypes.func,
  /* darkModeValue: PropTypes.bool, */
  cardSuccess: PropTypes.string,
  cardURL: PropTypes.string,
  availableButton: PropTypes.string,
  isLoading: PropTypes.bool,
};

export default FormGeneral;
