import React from "react";
import { Link } from "react-router-dom";
import logoCode from "../images/logo_motherCode.png";
import audio from "../audio/game-thrones-song.mp3";

const Header = (props) => {
  return (
    <div className="page__header">
      <div className="logo__container">
        <Link to="/" title="Ir a home">
          <img src={logoCode} alt="Logo APC" />
        </Link>
      </div>
      <div className="extraContainer">
        <div className="darkModeContainer">
          <input
            type="checkbox"
            name="checkbox"
            className="darkMode"
            id="darkMode"
            checked={props.value}
            onChange={props.switchHandler}
          />
          <label htmlFor="darkMode"></label>
        </div>
        <div key="1" className="song">
          <audio controls autoPlay loop>
            <source src={audio} type="audio/mp3" />
          </audio>
        </div>
      </div>
    </div>
  );
};

export default Header;
