import React, { Component } from "react";
import { makeStyles } from "@material-ui/styles";
import { faAlignCenter } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles((theme) => ({
    image: {
        flex: 1,
        widt: '100%',
        height: '100%',
        resizeMode: 'contain',

    },

}));


const TitleCard = (props) => {
    const { titleText } = props;
    const defaultStyle = useStyles();
    const imgUrl = require("../../asset/titlecard.png").default;

    return(
        <div>
        <img 
            className="image"
            src={imgUrl}
        /> 
        <h1 className="centered">{titleText}</h1>
        </div>
    );


};

export default TitleCard;