import React, { Component, useState } from "react";
import "./Calendar.css";
import Header from "../../components/Header/Header";
import TitleCard from "../../components/TitleCard/TitleCard";
import { Grid, Switch } from "@material-ui/core";
import BasicCalendar from "../../components/Calendar/Calendar";
import CategoryImages from "../../components/CategoryTags/CategoryTags";
import Footer from "../../components/Footer/Footer";
import MainContainer from "../../components/MainContainer/MainContainer";
import ImageTitle from "../../components/ImageTitle/ImageTitle";

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
        <Header
          items={[
            { name: "Home", link: "/", active: false },
            { name: "Calendar", link: "/calendar", active: true },
            { name: "MyPage", link: "/mypage", active: false },
          ]}
        />
        <MainContainer>
          <ImageTitle title="Main Calendar" />
          <div className="calendarContainer">
            <div>
              {this.state.eventsFromBackend.length > 0
                ? calendarComponent
                : null}
            </div>
            <div>
            <a href="/create">
              <button id="createEventButton" className="btn" size="small">
                Create an Event
              </button>
            </a>
            </div>
            <div>
            <CategoryImages
              onChange={(selectedTags) => this.filtering(selectedTags)}
            />
            </div>
          </div>
        </MainContainer>
        <br />
        <Footer />
      </>
    );
  }
}
