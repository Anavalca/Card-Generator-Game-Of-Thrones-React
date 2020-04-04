/* eslint-disable no-useless-constructor */
import React from "react";
import "../stylesheets/App.scss";
import "../stylesheets/Landing.scss";
// import Header from "./Header";
// import DesignForm from "./Form-components/DesignForm";
// import FillForm from "./Form-components/FillForm";
// import Footer from "./Footer";
import Landing from "./Landing";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Landing />
        {/* <Header />
        <DesignForm />
        <FillForm />
        <Footer />*/}
      </div>
    );
  }
}

export default App;
