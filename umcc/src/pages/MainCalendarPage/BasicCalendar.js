import React, {Component, useEffect} from 'react'
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import egg from '../../data/eventdata';

import "../../AppJson.css"
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);


class BasicCalendar extends Component {
  state = {
    events: egg
  };

  render() {
    return (
      <div className="BasicCalendar">
        <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={this.state.events}
          style={{ height: "100vh" }}
        />
      </div>
    );
  }
}

export default BasicCalendar;
