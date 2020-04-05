import React from "react";
import LandingLogo from "../images/tarjetas-molonas-loop-colors.svg";
import Footer from "./Footer";

class Landing extends React.Component {
  render() {
    return (
      <div className="page-index">
        <div className="hero-container">
          <div className="logo__container">
            <img
              className="landing-logo"
              src={LandingLogo}
              alt="Awesome Profile Cards Logo"
              title="Awesome Profile-Cards"
            />
            <section className="page-content">
              <div className="logo__loop--start logo_4loop-letter">by 4L</div>
              <span className="logo_4loop-letter loop__container">
                <svg
                  className="infinity"
                  version="1.1"
                  viewBox="0 0 187.3 93.7"
                  preserveAspectRatio="xMidYMid meet"
                  x="0px"
                  y="0px"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <path
                    className="infinity__outline"
                    d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z"
                  />
                  <path
                    className="infinity__tracer infinity__tracer--1"
                    d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z"
                  />
                  <path
                    className="infinity__tracer infinity__tracer--2"
                    d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z"
                  />
                  <path
                    className="infinity__tracer infinity__tracer--3"
                    d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z"
                  />
                  <path
                    className="infinity__tracer infinity__tracer--4"
                    d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z"
                  />
                  <path
                    className="infinity__tracer infinity__tracer--5"
                    d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z"
                  />
                  <path
                    className="infinity__tracer infinity__tracer--6"
                    d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z"
                  />
                </svg>
              </span>
              <div className="logo__loop--end logo_4loop-letter">ps!</div>
            </section>
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

          <a
            className="landing-start button__hover--styles"
            href="home.html"
            title="Comenzar"
          >
            comenzar
          </a>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Landing;
