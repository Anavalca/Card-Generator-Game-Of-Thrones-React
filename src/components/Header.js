import React from 'react';
import '../stylesheets/layouts/_header.scss';
import ImageCardsLogo from '../images/tarjetas-molonas-loop-colors.svg';


class Header extends React.Component {
  render() {
    return (
      <div className="page__header">
        <div className="logo__container">
          <a href="./" title="Ir a home">
            <img src={ImageCardsLogo} alt="Logo APC"/>
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
