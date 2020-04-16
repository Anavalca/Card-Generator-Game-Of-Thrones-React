import React from "react";
import { Link } from 'react-router-dom';
// import LandingLogo from "../images/tarjetas-molonas-loop-colors.svg";
import logoCodeLanding from '../images/logo_motherCode_landing.png';
import Footer from "./Footer";

class Landing extends React.Component {
  render() {
    return (
      <div className="page-index">
        <div className="hero-container">
          <div className="logo__container">
            <img
              className="landing-logo"
              src={logoCodeLanding}
              alt="Awesome Profile Cards Logo"
              title="Awesome Profile-Cards"
            />
            {/* <section className="page-content">
              <img src={logoCode} alt='logo code'/>
            </section> */}
          </div>

          <div className="landing-text">
            <h1>crea tu tarjeta de visita</h1>
            <p className="font__subtitle">
              crea mejores contactos profesionales de forma fácil y cómoda
            </p>
          </div>

          <ul className="landing-options">
            <li className="landing-options-item" id="item__home--design">
              <i className="landing-options-icon far fa-object-ungroup"></i>
              <p className="landing-options-text font__icons">diseña</p>
            </li>

            <li className="landing-options-item" id="item__home--fill">
              <i className="landing-options-icon far fa-keyboard"></i>
              <p className="landing-options-text font__icons">rellena</p>
            </li>

            <li className="landing-options-item" id="item__home--share">
              <i className="landing-options-icon fas fa-share-alt"></i>
              <p className="landing-options-text font__icons">comparte</p>
            </li>
          </ul>

          <Link to="/Cards"
            className="landing-start button__hover--styles"
            href="home.html"
            title="Comenzar"
          >
            comenzar
            </Link>
          
        </div>

     
      </div>
    );
  }
}

export default Landing;
