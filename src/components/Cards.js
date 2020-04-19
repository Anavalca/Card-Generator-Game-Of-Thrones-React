import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "../stylesheets/App.scss";

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.switchHandler = this.switchHandler.bind(this);

    this.state = {
      isDarkMode: false,
    };
  }

  switchHandler() {
    this.setState({ isDarkMode: !this.state.isDarkMode });
  }

  componentDidUpdate() {
    localStorage.setItem("darkMode", JSON.stringify(this.state));
  }

  componentDidMount() {
    const displayMode = JSON.parse(localStorage.getItem("darkMode"));
    if (displayMode !== null) {
      this.setState({
        isDarkMode: displayMode.isDarkMode,
      });
    }
  }

  render() {
    const isTurnOn = this.state.isDarkMode;
    return (
      <div className={!isTurnOn ? "page-home" : "page-home  dark-mode"}>
        <Header value={isTurnOn} switchHandler={this.switchHandler} />
        <Main darkModeValue={isTurnOn} />
        <Footer />
      </div>
    );
  }
}

export default Cards;
