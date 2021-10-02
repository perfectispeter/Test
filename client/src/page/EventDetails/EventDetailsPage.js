import { React, Component } from "react";
import "./EventDetailsPage.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import MainContainer from "../../components/MainContainer/MainContainer";
import ImageTitle from "../../components/ImageTitle/ImageTitle";
import EventToCalendarConverter from "../../components/Calendar/EventToCalendarConverter";
import axios from "axios";

export default class EventDetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

  render() {
    const thisEventID = window.location.pathname.replace("/event/", "");
    const thisEvent = this.state.eventsFromBackend.find(
      (e) => e.id === thisEventID
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
          <ImageTitle title= {thisEvent.title} />
          <div className="eventContainer">
              <p>Creator: {thisEvent.creator}</p>
              <p>Start: {thisEvent.start}</p>
              <p>End: {thisEvent.end}</p>
              <p>Description: {thisEvent.desc}</p>
          </div>

        </MainContainer>
        <br />
        <Footer />
      </>
    );
  }
}
