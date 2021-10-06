import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CustomButton from "../../components/CustomButton/CustomButton";
import axios from "axios";
import EventToCalendarConverter from "../../components/Calendar/EventToCalendarConverter";
import EnhancedTable from "../../components/EnhancedTable/EnhancedTable";

class AdminTools extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventsFromBackend: [],
      usersFromBackend: [],
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
    return (
      <>
        <Header />
        {/* <ImageTitle title="Admin Tools" /> */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "70%",
            margin: "0 auto 100px auto",
          }}
        >
          <h3 style={{ margin: "20px 0" }}>List of all the Events :</h3>
          {eventList.length > 0 ? (
            <EnhancedTable inputData={eventList} />
          ) : null}
          <h3 style={{ margin: "20px 0" }}>List of all the Users :</h3>
          <EnhancedTable inputData={userList} tableType="user" />
          <div style={{ margin: "20px auto 0 auto" }}>
            <CustomButton
              btntext="Back to Home Page"
              onClick={() => {
                this.props.history.push("/");
              }}
            />
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default AdminTools;
