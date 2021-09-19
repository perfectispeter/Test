import React, { Component, useState } from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import EventDetails from "../../page/EventDetails/EventDetails";
import { Grid, Card } from "@material-ui/core";

import "react-big-calendar/lib/css/react-big-calendar.css";

import { useHistory } from "react-router-dom";

const localizer = momentLocalizer(moment);

const BasicCalendar = (props) => {
  const { eventData } = props;

  // const { filter } = props; **TODO remove hardcoding the below as a filter **
  var filter = ["All Ages", "Sport"];

  const [eventID, setEventID] = useState();
  const [eventsArray, setEventsArray] = useState([eventData]);
  const [filters, setFilters] = useState([filter]);

  const categoryFilter = (props) => {
    var newEventsArray = [];

    eventData.map((event) => {
      if (event.categories) {
        if (event.categories.some((x) => filter.includes(x)))
          newEventsArray.push(event);
      }
    });
    setEventsArray([newEventsArray]);
    console.log("events after filtering: ", newEventsArray);
  };

  //TODO remove FILTER button, instead base on Category filters
  const actualCalendar = (
    <>
      <Grid
        container
        direction="row"
        spacing={1}
        justifyContent="flex-start"
        alignItems="center"
        xs={12}
        s={12}
        md={6}
        lg={6}
      >
        <Grid item>
          <Card raised={true}>
            <Calendar
              localizer={localizer}
              defaultDate={new Date()}
              defaultView="month"
              events={eventsArray[0]}
              style={{ height: "100vh" }}
              onSelectEvent={(data) => showEventDetails(data)}
            />
          </Card>
        </Grid>
        <Grid item>
          <EventDetails eventID={eventID} inputData={eventData} userID = {0} />
        </Grid>
        <Grid item>
            <button className="btn" onClick={categoryFilter}>
            FILTER
          </button>
        </Grid>
      </Grid>
    </>
  );

  const history = useHistory();

  function showEventDetails(event) {
    // history.push("/calendar:" + event.id);
    console.log("event clicked: " + event.title);
    setEventID(event.id);
  }

  return (
    <>
      <div className="BasicCalendar">{actualCalendar}</div>
    </>
  );
};

export default BasicCalendar;
