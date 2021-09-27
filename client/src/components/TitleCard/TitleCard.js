import React, { Component } from "react";
import { makeStyles } from "@material-ui/styles";

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
  const imgUrl = require("../../images/titlecard.jpg").default;

  return (
    <div>
      <img alt="" className="image" src={imgUrl} />
      <h1 className="centered">{titleText}</h1>
    </div>
  );
};

export default TitleCard;
