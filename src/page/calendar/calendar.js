import React, { Component, useState } from "react";
import "./calendar.css";
import Header from "../../components/header/header";
import TitleCard from "../../components/titleCard";
import { Grid, Switch } from "@material-ui/core";
import BasicCalendar from "../../components/calendar";
import CategoryImages from "../../components/categoryTags/CategoryImages";
import Footer from "../../components/Footer";

import data from "../../asset/eventdata";
import users from "../../asset/userdata.json";

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shownEvents: data,
      selectable: true,
      filters: []
    };
  }

  filtering(newFilters) {
    console.log("newFilters: ", newFilters);
     this.setState({filters: newFilters});
  }

  render() {
    return (
      <>
        <div className="mainContainer">
          <Header isHomepage={false} />
          <Grid
            container
            alignItems="center"
            justifyContent="flex-start"
            direction="column"
            container
            spacing={2}
            xs={12}
            s={12}
            md={12}
            lg={12}
          >
            <Grid item>
             <TitleCard titleText="Main Calendar" />
            </Grid>
          </Grid>
          <Grid
            container
            spacing={1}
            direction="row"
            alignItems="baseline"
            justifyContent="center"
            xs={12}
            s={12}
            md={12}
            lg={12}
          >
          
            <Grid item md={6} lg={6}>
            <BasicCalendar 
                eventData = {this.state.shownEvents}
                filter = {this.state.filters}
              />
            </Grid>
            <Grid item md={2} lg={2}>
              <a href="/create">
                <button id="createEventButton" className="btn" size="small">
                  Create an Event
                </button>
              </a>
            </Grid>
            <Grid item md={2} lg={2}>
              <CategoryImages onChange={selectedTags => 
                  this.filtering(selectedTags)}/>
            </Grid>

          </Grid>
          <br />
          <Footer />
        </div>
      </>
    );
  }
}
