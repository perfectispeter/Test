import React, { Component } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectAble: true,
    };
  }
  render() {
    return (
      <div>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin, listPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            start: "title,prev,next",
            right: "dayGridDay,dayGridWeek,dayGridMonth,listYear",
          }}
          buttonText={{
            day: "Day",
            week: "Week",
            month: "Month",
            list: "Year",
          }}
          events={[
            {
              title: "event 1",
              start: "2021-08-16",
              end: "2021-08-19",
              backgroundColor: "#3498db",
            },
            {
              title: "event 2",
              date: "2021-08-16 08:00",
              backgroundColor: "#2ecc71",
            },
            {
              title: "event 3",
              date: "2021-08-17 12:00",
              backgroundColor: "#9b59b6",
            },
            {
              title: "event 4",
              date: "2021-08-18 13:00",
              backgroundColor: "#34495e",
            },
            {
              title: "event 5",
              date: "2021-08-19 23:00",
              backgroundColor: "#e67e22",
            },
            {
              title: "event 6",
              date: "2021-08-19 08:00",
              backgroundColor: "#f1c40f",
            },
            {
              title: "event 7",
              date: "2021-08-19 09:00",
              backgroundColor: "#d35400",
            },
            {
              title: "event 8",
              start: "2021-08-19 10:00",
              end: "2021-08-22 10:00",
              backgroundColor: "#FDA7DF",
            },
            {
              title: "event 9",
              date: "2021-08-19 13:00",
              backgroundColor: "#ED4C67",
            },
          ]}
          dayMaxEvents={2}
          dateClick={this.eventSelect}
          selectable="true"
          editable="true"
          height="50vh"
          droppable="true"
        />
      </div>
    );
  }
  eventSelect(arg) {
    alert(arg.dateStr);
    console.log(arg);
  }
}

export default Calendar;