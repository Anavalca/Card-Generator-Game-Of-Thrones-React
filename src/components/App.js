<<<<<<< HEAD
/* eslint-disable no-useless-constructor */
import React from 'react';
import '../stylesheets/App.scss';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';



class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main/>
        <Footer />
      </div>
    );
  }
}

export default App;
=======
/* eslint-disable no-useless-constructor */
import React from "react";
import "../stylesheets/App.scss";
import Header from "./Header";
import DesignForm from "./Form-components/DesignForm";
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
        <DesignForm />
        <FillForm />
        <Footer />
      </div>
    );
  }
}

export default App;
>>>>>>> be1d70ff72bb0da14177ba961e83bde27a49d3e0
