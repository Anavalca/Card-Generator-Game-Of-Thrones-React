import React from 'react';
// import ImageCardsLogo from '../images/tarjetas-molonas-loop-colors.svg';
import logoCode from '../images/logo_motherCode.png';


class Header extends React.Component {
  render() {
    return (
      <div className="page__header">
        <div className="logo__container">
          <a href="./" title="Ir a home">
            <img src={logoCode} alt="Logo APC"/>
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
