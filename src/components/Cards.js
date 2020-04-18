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
    console.log("1.Cards State:", this.state);
    this.setState({ isDarkMode: !this.state.isDarkMode });
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
