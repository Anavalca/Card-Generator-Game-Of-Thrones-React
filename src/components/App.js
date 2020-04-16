/* eslint-disable no-useless-constructor */
import React from "react";
import {  Route, Switch } from 'react-router-dom';
import "../stylesheets/App.scss";
import Landing from "./Landing";
import "../stylesheets/Landing.scss";
import Cards from './Cards';
// import Header from "./Header";
// import Main from "./Main";
import Footer from "./Footer";


class App extends React.Component {
  

  render() {    
    return (
      <div>         
          <Switch>          
            <Route exact path="/" component = {Landing}></Route> 
            <Route path="/Cards" component = {Cards}></Route>            
          </Switch>            
          <Footer />
      </div>
    );
  }
}

export default App;

