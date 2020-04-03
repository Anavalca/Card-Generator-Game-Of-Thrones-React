<<<<<<< HEAD
=======

>>>>>>> 5262a561a52517a2af1c4372f14ce998942740c9
/* eslint-disable no-useless-constructor */
import React from "react";
import "../stylesheets/App.scss";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
