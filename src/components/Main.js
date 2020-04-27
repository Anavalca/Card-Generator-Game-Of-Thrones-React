import React from 'react';
import { fetchCardData } from '../services/CardServices';
import FormGeneral from './FormGeneral';
import PreviewCard from './PreviewCard';
import defaultImage from '../images/daenerys.gif';
import PropTypes from 'prop-types';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.handlePalette = this.handlePalette.bind(this);
    this.handleInputValue = this.handleInputValue.bind(this);
    this.updateAvatar = this.updateAvatar.bind(this);
    this.activeIcons = this.activeIcons.bind(this);
    this.resetAll = this.resetAll.bind(this);
    this.changePhotoCam = this.changePhotoCam.bind(this);
    this.fetchCardData = this.fetchCardData.bind(this);
    this.setURL = this.setURL.bind(this);
    this.validateButton = this.validateButton.bind(this);

    this.reader = new FileReader();

    this.state = {
      userInfo: {
        palette: '1',
        name: '',
        job: '',
        photo: defaultImage,
        phone: '',
        email: '',
        linkedin: '',
        github: '',
      },

      iconsInfo: {
        iconEmail: 'opacity',
        iconPhone: 'opacity',
        iconLinkedin: 'opacity',
        iconGithub: 'opacity',
      },
      cardURL: '',
      isLoading: false,
      cardSuccess: '',
      validAvatar: '',
    };

    this.initialState = this.state;
  }

  //GET VALUE FROM PALETTE
  handlePalette(data) {
    this.setState((prevState) => {
      return {
        userInfo: {
          ...prevState.userInfo,
          palette: data,
        },
      };
    });
  }

  //UPDATE AVATAR
  updateAvatar(img) {
    const { profile } = this.state;
    this.setState((prevState) => {
      let newProfile = { ...profile, photo: img };
      let newUserInfo = prevState.userInfo;

      return {
        profile: newProfile,
        isAvatarDefault: false,
        validAvatar: true,
        userInfo: { ...newUserInfo, photo: img },
      };
    });
  }

  //UPDATE AVATAR WITH SCREENSHOT CAMERA
  changePhotoCam(screenshot) {
    this.setState((prevState) => {
      return {
        userInfo: {
          ...prevState.userInfo,
          photo: screenshot,
        },
      };
    });
  }

  //ACTIVE OR NOT RRSS ICONS
  activeIcons(inputName, value) {
    //CHANGE EMAIL ICON
    if (inputName === 'email') {
      if (value !== '') {
        this.setState((prevState) => {
          return {
            iconsInfo: {
              ...prevState.iconsInfo,
              iconEmail: '',
            },
          };
        });
      } else {
        this.setState((prevState) => {
          return {
            iconsInfo: {
              ...prevState.iconsInfo,
              iconEmail: 'opacity',
            },
          };
        });
      }
    }
    //CHANGE PHONE ICON
    if (inputName === 'phone') {
      if (value !== '') {
        this.setState((prevState) => {
          return {
            iconsInfo: {
              ...prevState.iconsInfo,
              iconPhone: '',
            },
          };
        });
      } else {
        this.setState((prevState) => {
          return {
            iconsInfo: {
              ...prevState.iconsInfo,
              iconPhone: 'opacity',
            },
          };
        });
      }
    }
    //CHANGE LINKEDIN ICON
    if (inputName === 'linkedin') {
      if (value !== '') {
        this.setState((prevState) => {
          return {
            iconsInfo: {
              ...prevState.iconsInfo,
              iconLinkedin: '',
            },
          };
        });
      } else {
        this.setState((prevState) => {
          return {
            iconsInfo: {
              ...prevState.iconsInfo,
              iconLinkedin: 'opacity',
            },
          };
        });
      }
    }
    //CHANGE GITHUB ICON
    if (inputName === 'github') {
      if (value !== '') {
        this.setState((prevState) => {
          return {
            iconsInfo: {
              ...prevState.iconsInfo,
              iconGithub: '',
            },
          };
        });
      } else {
        this.setState((prevState) => {
          return {
            iconsInfo: {
              ...prevState.iconsInfo,
              iconGithub: 'opacity',
            },
          };
        });
      }
    }
  }

  //GET DATA FROM INPUTS AND UPDATE IN THE STATE
  handleInputValue(inputName, inputValue) {
    this.setState((prevState) => {
      return {
        userInfo: {
          ...prevState.userInfo,
          [inputName]: inputValue,
        },
      };
    });
    this.activeIcons(inputName, inputValue);
  }

  //RESET ALL
  resetAll() {
    this.setState(this.initialState);
  }

  componentDidUpdate() {
    localStorage.setItem('userInfo', JSON.stringify(this.state.userInfo));
    localStorage.setItem('iconsInfo', JSON.stringify(this.state.iconsInfo));
  }



  componentDidMount() {
    const userLocalInfo = JSON.parse(localStorage.getItem('userInfo'));
    const iconsLocalInfo = JSON.parse(localStorage.getItem('iconsInfo'));

    if (userLocalInfo !== null) {
      this.setState({
        userInfo: {
          palette: userLocalInfo.palette,
          name: userLocalInfo.name,
          job: userLocalInfo.job,
          photo: userLocalInfo.photo,
          phone: userLocalInfo.phone,
          email: userLocalInfo.email,
          linkedin: userLocalInfo.linkedin,
          github: userLocalInfo.github,
        },
      });
    }

    if (iconsLocalInfo !== null) {
      this.setState({
        iconsInfo: {
          iconEmail: iconsLocalInfo.iconEmail,
          iconPhone: iconsLocalInfo.iconPhone,
          iconLinkedin: iconsLocalInfo.iconLinkedin,
          iconGithub: iconsLocalInfo.iconGithub,
        },
      })
    }



  }

  validateButton() {
    const { name, job, email, linkedin, github, photo } = this.state.userInfo;

    if (
      name !== '' &&
      job !== '' &&
      email !== '' &&
      linkedin !== '' &&
      github !== '' &&
      photo !== defaultImage
    ) {
      return 'available';
    } else {
      return 'disable';
    }
  }


  fetchCardData() {
    const json = JSON.parse(localStorage.getItem('userInfo'));
    fetchCardData(json)
      .then((result) => this.setURL(result))
      .catch((error) => this.handleError(error));

    this.setState({
      isLoading: true,
    });
  }
  

  setURL(result) {
    if (result.success) {
      this.setState({
        cardSuccess: true,
        cardURL: result.cardURL,
        isLoading: false,
      });
    } else {
      this.setState({
        cardSuccess: false,
        isLoading: false,
      });
    }
  }

  handleError(error) {
    this.setState({
      cardSuccess: false,
      cardURL: error,
      isLoading: false,
    });
  }

 
  render() {
    const { palette, name, job, photo, camera, email, phone, linkedin, github } = this.state.userInfo;
    const { iconEmail, iconPhone, iconLinkedin, iconGithub } = this.state.iconsInfo;
    const { validAvatar, cardSuccess, cardURL, isLoading } = this.state;
    const { darkModeValue } = this.props; 
    
    return (
      <main className="page__home--main container">
        <PreviewCard
          colorPaletteData={palette}
          userName={name}
          userJob={job}
          photo={photo}
          iconEmail={iconEmail}
          iconPhone={iconPhone}
          iconLinkedin={iconLinkedin}
          iconGithub={iconGithub}
          resetAll={this.resetAll}
          darkModeValue={darkModeValue}
        />

        <FormGeneral
          paletteHandler={this.handlePalette}
          colorPaletteData={palette}
          userName={name}
          userJob={job}
          photo={photo}
          isAvatarDefault={this.isAvatarDefault}
          validAvatar={validAvatar}
          updateAvatar={this.updateAvatar}
          camera={camera}
          toggleCamera={this.toggleCamera}
          saveScreenshot={this.changePhotoCam}
          emailValue={email}
          phoneValue={phone}
          linkedinValue={linkedin}
          githubValue={github}
          handleInputValue={this.handleInputValue}
          availableButton={this.validateButton()}
          fetchCardData={this.fetchCardData}
          cardSuccess={cardSuccess}
          cardURL={cardURL}
          darkModeValue={darkModeValue}
          isLoading={isLoading}
        />
      </main>
    );
  }
}

Main.propTypes = {
  darkModeValue: PropTypes.bool,
  isLoading: PropTypes.bool,
  validAvatar: PropTypes.string,
  cardSuccess: PropTypes.bool,
  cardURL: PropTypes.string,
  userInfo: PropTypes.object,
  iconsInfo: PropTypes.object,
}

export default Main;
