import React, { Component, useState } from "react";
import "./Calendar.css";
import Header from "../../components/Header/Header";
import TitleCard from "../../components/TitleCard/TitleCard";
import { Grid, Switch } from "@material-ui/core";
import BasicCalendar from "../../components/Calendar/Calendar";
import CategoryTags from "../../components/CategoryTags/CategoryTags";
import Footer from "../../components/Footer/Footer";

import data from "../../asset/eventdata";
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
        <Header />
        <h3 className="center"> Master Calendar</h3>
        <p className="center">
          Here you can find the complete calendar listing all the events
        </p>
        <div className="calendar-container">
          <div class="fixed">
            {this.state.eventsFromBackend.length > 0 ? calendarComponent : null}
          </div>
          <div class="flex-item">
            <CategoryTags
              onChange={(selectedTags) => this.filtering(selectedTags)}
            />
          </div>
          <br />
        </div>
        <div class="center">
          <h5>
            Moderators can create an event :
            <a href="/create">
              <button
                id="createEventButton"
                class="btn waves-effect waves-light indigo darken-3"
              >
                Create A New Event
              </button>
            </a>
          </h5>
        </div>
        <br />
        <Footer />
      </>
    );
  }
}
