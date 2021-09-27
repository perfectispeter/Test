import React, { Component } from "react";
import imgUrl from "../../asset/titlecard.png";
import "./imgtitle.css";

class ImgTitle extends Component {
  render() {
    return (
      <>
        <img className="title-img" src={imgUrl} alt="" />
        <p className="imgText">{this.props.title}</p>
      </>
    );
  }
}

export default ImgTitle;
