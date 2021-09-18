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
  const filter = ["All Ages", "Sport"];

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
      <button className="btn" onClick={categoryFilter}>
        FILTER
      </button>
      <Grid
        container
        direction="column"
        spacing={1}
        justifyContent="flex-start"
        alignItems="center"
        xs={3}
        s={3}
        md={6}
        lg={12}
        xl={12}
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
          <EventDetails eventID={eventID} />
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
