import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
    app: {
        background: theme.palette.background.primary,
    },
}));

const Layout = (props) => {
    const { children } = props;
    const classes = useStyles();

    return (
        <Grid container direction="column" spacing={0} className={classes.app}>
            header component goes here
            then any of our content
            footer component goes here
        </Grid>
    );
};

Layout.propTypes = {
    children: PropTypes.node,
};

export default Layout;
