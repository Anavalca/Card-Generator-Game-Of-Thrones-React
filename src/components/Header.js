import React from "react";
import { Link } from 'react-router-dom';
// import ImageCardsLogo from '../images/tarjetas-molonas-loop-colors.svg';
import logoCode from "../images/logo_motherCode.png";

const Header = (props) => {
  console.log(props);
  return (
    <div className="page__header">

      <div className="logo__container">

        <Link to="/" title="Ir a home">
          <img src={logoCode} alt="Logo APC" />
        </Link>
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
