import React from "react";
import Header from "./Header";
import Main from "./Main";

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
 
   render() {
     const isTurnOn = this.state.isDarkMode;
     return (
       <div className={!isTurnOn ? "page-home" : "page-home  dark-mode"}>
            
           
           
             
             <Header value={isTurnOn} switchHandler={this.switchHandler} /> 
             <Main />
         
           
             
           
       </div>
     );
   }
 }


export default Cards;