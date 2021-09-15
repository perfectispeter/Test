import React, { Component } from "react";
import "./calendar.css";
import Header from "../../components/header/header";
import TitleCard from "../../components/titleCard";
import { Grid, Switch } from "@material-ui/core";
import BasicCalendar from "../../components/calendar";
import CategoryImages from "../../components/categoryTags/CategoryImages";
import Footer from "../../components/Footer";

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectable: true,
    };
  }
  render() {
    return (
      <>
        <div className="mainContainer">
          <Header />
          <Grid
            container
            alignItems="center"
            alignContent="stretch"
            justifyContent="flex-start"
            direction="column"
            container
            spacing={2}
            xs={3}
            s={3}
            md={6}
            lg={12}
            xl={12}
          >
            <TitleCard titleText="Main Calendar" />
          </Grid>
          <Grid
            container
            spacing={2}
            direction="row"
            alignItems="center"
            xs={3}
            s={3}
            md={6}
            lg={12}
            xl={12}
          >
            <Grid item>
              <BasicCalendar />
            </Grid>
            <Grid item>
              <h3>
                Filter by category: <Switch />
              </h3>
              <CategoryImages />
            </Grid>
            <Grid item>
              <a href="/create">
                <button id="createEventButton" className="btn" size="small">
                  Create an Event
                </button>
              </a>
            </Grid>
          </Grid>
          <br />
          <Footer />
        </div>
      </>
    );
  }
}
