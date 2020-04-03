/* eslint-disable no-useless-constructor */
import React from "react";
import "../stylesheets/App.scss";
import Header from "./Header";
import FillForm from "./Form-components/FillForm";
import Footer from "./Footer";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <FillForm />
        <Footer />
      </div>
    );
  }
}

export default App;
