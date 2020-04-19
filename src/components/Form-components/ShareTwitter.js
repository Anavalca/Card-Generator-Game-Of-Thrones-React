import React from "react";

class ShareTwitter extends React.Component {
  render() {
    const cardSuccess = this.props.cardSuccess;
    console.log(this.props);
    return (
      <div
        className={
          cardSuccess === "" ? "panel__content2 hidden" : "panel__content2"
        }
      >
        <a className="print__url--twitter" href="" target="local"></a>
        <a
          type="button"
          className={
            cardSuccess === ""
              ? "btn-twit button__hover--styles display__none"
              : "btn-twit button__hover--styles"
          }
          target="local"
        >
          <i className="fab fa-twitter" href=""></i>Compartir en Twitter
        </a>
      </div>
    );
  }
}

export default ShareTwitter;
