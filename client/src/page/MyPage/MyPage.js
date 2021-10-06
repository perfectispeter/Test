import React, { Component } from "react";
import Header from "../../components/Header/Header";
import "./MyPage.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import CustomButton from "../../components/CustomButton/CustomButton";
import EnhancedTable from "../../components/EnhancedTable/EnhancedTable";
import BasicCalendar from "../../components/Calendar/Calendar";
import axios from "axios";
import EventToCalendarConverter from "../../components/Calendar/EventToCalendarConverter";
import Footer from "../../components/Footer/Footer";
import store from "../../store";

//TODO TEMPORARILY IMPORTING HARDCODED USERS
import userData from "../../asset/userdata.json";

export default class Mypage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventsFromBackend: [],
      //TODO TEMPORARILY HARDCODING USERID TO 0, WILL PULL FROM CURRENT LOGIN STATE
      userID: 0,
    };
  }

  componentDidMount() {
    //eventlist
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

    //userlist
    axios
      .get(process.env.REACT_APP_MY_URL + "api/users")
      .then((res) => {
        this.setState({
          usersFromBackend: res.data,
        });
      })
      .then(
        console.log(
          "Current users from back end (after .then): ",
          this.state.usersFromBackend
        )
      )
      .catch((err) => {
        console.log("Error from ShowUserList: ", err);
      });
  }

  render() {
    const eventList = this.state.eventsFromBackend;
    const userList = this.state.usersFromBackend;

    var calendarComponent = (
      <BasicCalendar eventData={allMyEvents(this.state.userID)} />
    );

    function myCreatedEvents(user) {
      const eventArray = eventList.filter(
        (e) => e.creator && e.creator.includes(user)
      );
      return eventArray;
    }

    function myBookmarkedEvents(user) {
      //TODO using hardcoded userData, need to pull from something like currentUser.bookmarked_events instead
      const eventArray = eventList.filter((e) =>
        userData.users.at(user).bookmarked_events.includes(e.id)
      );
      return eventArray;
    }

    function allMyEvents(user) {
      const eventArray = myBookmarkedEvents(user).concat(myCreatedEvents(user));
      return eventArray;
    }

    return (
      <>
        <Header />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "70%",
            margin: "0 auto 100px auto",
          }}
        >
          <h3 style={{ marginTop: "50px" }}>Events I've Created</h3>
          {eventList.length > 0 ? (
            <EnhancedTable inputData={eventList} />
          ) : null}
          <h3 style={{ margin: "20px 0" }}>Events I've Bookmarked</h3>
          <EnhancedTable inputData={userList} tableType="user" />
        </div>
        <div className="eventContainer">
          <div>
            {this.state.eventsFromBackend.length > 0 ? calendarComponent : null}
          </div>
          <button
            class="btn waves-effect waves-light indigo darken-3"
            name="action"
            onClick={() => {
              this.props.history.push("/");
            }}
          >
            Back to Home Page
          </button>
        </div>
        <br />
        <Footer />
        {console.log(store.getState().auth.user.email)}
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
