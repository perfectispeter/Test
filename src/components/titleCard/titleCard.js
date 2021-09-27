import React from "react";
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
  const imgUrl = require("../../asset/titlecard.jpg").default;

  return (
    <div>
      <img className="image" src={imgUrl} alt="" />
      <h1 className="centered">{titleText}</h1>
    </div>
  );
};

export default TitleCard;
