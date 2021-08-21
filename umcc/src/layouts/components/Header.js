import React from "react";
import { PropTypes } from "prop-types";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: black,
    },
    flexGrow: {
        flexGrow: 1,
    },
}));

const Header = (props) => {
    const {className, onSidebarOpen, user, ...rest } = props;

    const classes = useStyles();

    return (
        <div>
            <Grid container> 
                Header content goes here
            </Grid>
        </div>
    );
};

Header.propTypes = {
    className: PropTypes.string,
    onSidebarOpen: PropTypes.func,
};

export default Header;