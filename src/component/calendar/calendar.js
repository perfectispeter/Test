import React, { Component, useEffect } from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import data from "../../asset/eventdata";

import "react-big-calendar/lib/css/react-big-calendar.css";

import { useHistory } from "react-router-dom";

const localizer = momentLocalizer(moment);

const BasicCalendar = (props) => {
  const actualCalendar = (
    <Calendar
      localizer={localizer}
      defaultDate={new Date()}
      defaultView="month"
      events={data}
      style={{ height: "100vh" }}
      onSelectEvent={(data) => showEventDetails(data)}
    />
  );

  const history = useHistory();

  function showEventDetails(event) {
    history.push("/calendar?" + event.id);
    console.log("event clicked: " + event.title);
  }

  return (
    <>
      <div className="BasicCalendar">{actualCalendar}</div>
    </>
  );
};

export default BasicCalendar;
