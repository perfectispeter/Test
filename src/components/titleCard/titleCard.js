import React, { Component } from "react";
import { makeStyles } from "@material-ui/styles";
import imgUrl from "../../asset/titlecard.jpg";
import "./titleCard.css";
import { faAlignCenter } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles((theme) => ({
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
}));

const TitleCard = (props) => {
  const { titleText } = props;
  const defaultStyle = useStyles();
  // const imgUrl = require("../../asset/titlecard.jpg").default;

  return (
    <div>
      <img className="title-img" src={imgUrl} />
      <h1 className="imgText">{titleText}</h1>
    </div>
  );
};

export default TitleCard;
