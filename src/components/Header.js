import React from "react";
// import ImageCardsLogo from '../images/tarjetas-molonas-loop-colors.svg';
import logoCode from "../images/logo_motherCode.png";

const Header = (props) => {
  console.log(props);
  return (
    <div className="page__header">
      <div className="logo__container">
        <a href="./" title="Ir a home">
          <img src={logoCode} alt="Logo APC" />
        </a>
      </div>
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
    </div>
  );
};

export default Header;
