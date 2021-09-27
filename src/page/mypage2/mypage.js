import React, { Component } from "react";
import Header from "../../component/header/header";
import "./mypage.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import CustomButton from "../../component/custombutton/custombutton";
import { TextField } from "@material-ui/core";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import CustomTable from "../../component/customtable/customtable";
import ImgTitle from "../../component/imgtitle/imgtitle";
import MainContainer from "../../component/maincontainer/mainContainer";

export default class Mypage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const localizer = momentLocalizer(moment);
    const resourceMap = [
      { resourceId: 1, resourceTitle: "Board room" },
      { resourceId: 2, resourceTitle: "Training room" },
      { resourceId: 3, resourceTitle: "Meeting room 1" },
      { resourceId: 4, resourceTitle: "Meeting room 2" },
    ];
    const myEventsList = [
      {
        id: 0,
        title: "All Day Event very long title",
        allDay: true,
        start: new Date(2021, 8, 7),
        end: new Date(2021, 8, 12),
        resourceId: 4,
      },
      {
        id: 1,
        title: "Long Event",
        start: new Date(2021, 8, 9),
        end: new Date(2021, 8, 10),
        resourceId: 1,
      },
      {
        id: 2,
        title: "Long Event",
        start: new Date(2021, 8, 9),
        end: new Date(2021, 8, 10),
        resourceId: 2,
      },
      {
        id: 3,
        title: "Long Event",
        start: new Date(2021, 8, 9),
        end: new Date(2021, 8, 10),
        resourceId: 3,
      },
      {
        id: 4,
        title: "Long Event",
        start: new Date(2021, 8, 9),
        end: new Date(2021, 8, 10),
      },
    ];
    return (
      <>
        <Header
          items={[
            { name: "Home", link: "/", active: false },
            { name: "calendar", link: "/calendar", active: false },
            { name: "mypage", link: "/mypage", active: true },
          ]}
        />
        <MainContainer>
          <ImgTitle title="My Page" />
          <div className="profile">
            <div className="input-container">
              <TextField label="Name" fullWidth />
              <CustomButton size="sm" btntext="change" />
            </div>
            <div className="input-container">
              <TextField label="Email" type="email" fullWidth />
              <CustomButton size="sm" btntext="change" />
            </div>
            <div className="input-container">
              <TextField label="Password" type="password" fullWidth />
              <CustomButton size="sm" btntext="change" />
            </div>
            <div className="action-group">
              <CustomButton
                btntext="Edit my Profile"
                onClick={this.click.bind(this)}
              />
              <CustomButton
                btntext="View my Profile"
                onClick={this.click.bind(this)}
              />
            </div>
          </div>
          <div className="eventContainer">
            <div>
              <h1>Events I've Created</h1>
              <CustomTable
                pageOptions={[2, 5, 6]}
                rowsPerPage={2}
                order="asc"
                orderBy="Event Name"
                tableHead={[
                  "Event Name",
                  "start date",
                  "end date",
                  "category",
                  "location",
                ]}
                data={[
                  {
                    "Event Name": "event1",
                    "start date": "03/09/2021",
                    "end date": "04/09/2021",
                    category: "meeting",
                    location: "test location1",
                  },
                  {
                    "Event Name": "event2",
                    "start date": "04/09/2021",
                    "end date": "05/09/2021",
                    category: "meeting2",
                    location: "test location2",
                  },
                  {
                    "Event Name": "test event3",
                    "start date": "05/09/2021",
                    "end date": "06/09/2021",
                    category: "meeting3",
                    location: "test location3",
                  },
                  {
                    "Event Name": "test event4",
                    "start date": "06/09/2021",
                    "end date": "07/09/2021",
                    category: "meeting4",
                    location: "test location4",
                  },
                ]}
              />
            </div>
            <div style={{ margin: "30px 0" }}>
              <h1>Events I've Bookmarked</h1>
              <CustomTable
                pageOptions={[3, 5, 6]}
                rowsPerPage={3}
                order="asc"
                orderBy="Event Name"
                tableHead={[
                  "Event Name",
                  "start date",
                  "end date",
                  "category",
                  "location",
                ]}
                data={[
                  {
                    "Event Name": "test event1",
                    "start date": "03/09/2021",
                    "end date": "04/09/2021",
                    category: "meeting",
                    location: "test location1",
                  },
                  {
                    "Event Name": "test event2",
                    "start date": "04/09/2021",
                    "end date": "05/09/2021",
                    category: "meeting2",
                    location: "test location2",
                  },
                  {
                    "Event Name": "test event3",
                    "start date": "05/09/2021",
                    "end date": "06/09/2021",
                    category: "meeting3",
                    location: "test location3",
                  },
                  {
                    "Event Name": "test event4",
                    "start date": "06/09/2021",
                    "end date": "07/09/2021",
                    category: "meeting4",
                    location: "test location4",
                  },
                ]}
              />
            </div>
            <div style={{ height: "500px", margin: "50px 0" }}>
              <Calendar
                resources={resourceMap}
                selectable={true}
                popup={true}
                defaultView="month"
                localizer={localizer}
                events={myEventsList}
                startAccessor="start"
                endAccessor="end"
                defaultDate={new Date(Date.now())}
                onSelecting={this.RangeChange}
              />
            </div>
          </div>
        </MainContainer>
      </>
    );
  }
  click() {
    this.props.history.push("/profile");
  }
  RangeChange(dates) {
    console.log(dates);
  }
}
