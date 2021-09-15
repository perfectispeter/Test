import React, { Component, useState } from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import data from "../../asset/eventdata";
import EventDetails from "../../page/EventDetails/EventDetails";
import { Grid, Card } from "@material-ui/core";

import "react-big-calendar/lib/css/react-big-calendar.css";

import { useHistory } from "react-router-dom";

const localizer = momentLocalizer(moment);

const BasicCalendar = (props) => {
  const [eventID, setEventID] = useState();
  const actualCalendar = (
    <>
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
              events={data}
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
