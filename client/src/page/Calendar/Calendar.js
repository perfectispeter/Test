import React, { Component, useState } from "react";
import "./Calendar.css";
import Header from "../../components/Header/Header";
import TitleCard from "../../components/TitleCard/TitleCard";
import { Grid, Switch } from "@material-ui/core";
import BasicCalendar from "../../components/Calendar/Calendar";
import CategoryImages from "../../components/CategoryTags/CategoryTags";
import Footer from "../../components/Footer/Footer";

import data from "../../asset/eventdata";
import users from "../../asset/userdata.json";
import axios from "axios";
import EventToCalendarConverter from "../../components/Calendar/EventToCalendarConverter";

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shownEvents: data,
      selectable: true,
      filters: [],
      eventsFromBackend: [],
    };
  }

  componentDidMount() {
    axios
      .get(process.env.REACT_APP_MY_URL + "api/events")
      .then((res) => {
        this.setState({
          eventsFromBackend: EventToCalendarConverter(res.data),
        });
      })
      .then(
        console.log(
          "Current events from back end (after .then): ",
          this.state.eventsFromBackend
        )
      )
      .catch((err) => {
        console.log("Error from ShowEventList: ", err);
      });
  }

  filtering(newFilters) {
    console.log("newFilters: ", newFilters);
    this.setState({ filters: newFilters });
  }

  render() {
    const eventList = this.state.eventsFromBackend;
    console.log("eventlist:", eventList);

    var calendarComponent = (
      <BasicCalendar eventData={eventList} filter={this.state.filters} />
    );

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
              {this.state.eventsFromBackend.length > 0
                ? calendarComponent
                : null}
            </Grid>
            <Grid item md={2} lg={2}>
              <a href="/create">
                <button id="createEventButton" className="btn" size="small">
                  Create an Event
                </button>
              </a>
            </Grid>
            <Grid item md={2} lg={2}>
              <CategoryImages
                onChange={(selectedTags) => this.filtering(selectedTags)}
              />
            </Grid>
          </Grid>
          <br />
          <Footer />
        </div>
      </>
    );
  }
}
