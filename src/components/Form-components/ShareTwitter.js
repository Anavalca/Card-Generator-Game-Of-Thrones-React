import React from "react";
import "../../stylesheets/App.scss";

class ShareTwitter extends React.Component {
  render() {
    const cardURL = this.props.cardURL;
    const cardSuccess = this.props.cardSuccess;
    return (
      <div className={cardSuccess === "" ? "hidden" : "panel__content2"}>
        {/* <a className="print__url--twitter" href="" target="local"></a> */}
        <a
          type="button"
          className="btn-twit"
          href={`https://twitter.com/intent/tweet?text=He%20creado%20esta%20tarjeta%20con%20Awesome%20Profile%20Cards%20by%20Mother%20of%20Code:%0A;hashtags=Adalab,%20MotherOfCode, %20AwesomeProfileCards,%20PromoIdelisa %20FrontendDev ${cardURL}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter" href=""></i>Compartir en Twitter
        </a>
      </div>
    );
  }
}

export default ShareTwitter;
