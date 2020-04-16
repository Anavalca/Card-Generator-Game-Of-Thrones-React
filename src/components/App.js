/* eslint-disable no-useless-constructor */
import React from "react";
import {  Route, Switch } from 'react-router-dom';
import "../stylesheets/App.scss";
import Landing from "./Landing";
import "../stylesheets/Landing.scss";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";


class App extends React.Component {
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

  render() {
    const isTurnOn = this.state.isDarkMode;
    return (
      <div className={!isTurnOn ? "page-home" : "page-home  dark-mode"}>
         <Header value={isTurnOn} switchHandler={this.switchHandler} />    
          <Switch>
            <Route exact path="/"><Landing /></Route> 
            <Route exact path="/Main"><Main /></Route>
          </Switch>
          
            
        <Footer />
      </div>
    );
  }
}

export default App;

///DESCOMENTAR las partes comentadas y comentar : imports de header,main y footer, así como en el return --> para ver Landing
