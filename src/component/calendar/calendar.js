import React, {Component, useEffect} from 'react'
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import data from "../../asset/eventdata";

import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);


const BasicCalendar = (props) => {
 
  const { events } = props;

  const actualCalendar = <Calendar
                            localizer={localizer}
                            defaultDate={new Date()}
                            defaultView="month"
                            events={data}
                            style={{ height: "100vh" }}
                            onSelectEvent= {eventClicked()}
                            selected={events}
                          />;

  function eventClicked() {
    console.log("event clicked");
  };
  
    return (
      <div className="BasicCalendar">
        {actualCalendar}
      </div>
    );
  
}

export default BasicCalendar;