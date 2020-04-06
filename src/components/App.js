/* eslint-disable no-useless-constructor */
import React from "react";
import "../stylesheets/App.scss";
// import Landing from "./Landing";
// import "../stylesheets/Landing.scss";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="page-home">
        {/* <Landing /> */}
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;

///DESCOMENTAR las partes comentadas y comentar : imports de header,main y footer, así como en el return --> para ver Landing
