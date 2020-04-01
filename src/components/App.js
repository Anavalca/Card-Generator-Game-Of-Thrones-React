/* eslint-disable no-useless-constructor */
import React from "react";
import logo from "../images/logo.svg";
import "../stylesheets/App.scss";
import FillForm from "./Form-components/FillForm";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <main className="main">
          <FillForm />
          </main>
      </div>
    );
  }
}

export default App;
