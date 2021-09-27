import React, { Component } from "react";
import imgUrl from "../../images/titlecard.jpg";
import "./ImageTitle.css";

class ImageTitle extends Component {
  render() {
    return (
      <>
        <img className="title-img" src={imgUrl} alt="" />
        <p className="imgText">{this.props.title}</p>
      </>
    );
  }
}

export default ImageTitle;
