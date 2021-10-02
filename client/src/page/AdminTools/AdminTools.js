import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import MainContainer from "../../components/MainContainer/MainContainer";
import ImageTitle from "../../components/ImageTitle/ImageTitle";
import AdminEventTable from "../../components/AdminEventTable/AdminEventTable";
import { AdminUserTable } from "../../components/AdminUserTable/AdminUserTable";
import CustomButton from "../../components/CustomButton/CustomButton";
import axios from "axios";
import EventToCalendarConverter from "../../components/Calendar/EventToCalendarConverter";
import EnhancedTable from '../../components/EnhancedTable/EnhancedTable';

//TODO TEMPORARILY READING HARDCODED USERS
import users from "../../asset/userdata.json";


class AdminTools extends React.Component {
  constructor(props){
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
        console.log("Current events from back end (after .then): ",this.state.eventsFromBackend)
      )
      .catch((err) => {
        console.log("Error from ShowEventList: ", err);
      });
  }

  render() {
    const eventList = this.state.eventsFromBackend;
    return (
      <>
        <Header />
        <MainContainer>
          <ImageTitle title="Admin Tools" />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "70%",
              margin: "0 auto 100px auto",
            }}
          >
            <h1 style={{ margin: "20px 0" }}>Events</h1>
            {/* <AdminEventTable
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
                "Event Time",
              ]}
              datas={[
                {
                  "Event Name": "event1",
                  "start date": "03/09/2021",
                  "end date": "04/09/2021",
                  "Event Time": "04/09/2021",
                  category: "meeting",
                  location: "test location1",
                  active: true,
                },
                {
                  "Event Name": "event2",
                  "start date": "04/09/2021",
                  "end date": "05/09/2021",
                  "Event Time": "04/09/2021",
                  category: "meeting2",
                  location: "test location2",
                  active: false,
                },
                {
                  "Event Name": "test event3",
                  "start date": "05/09/2021",
                  "end date": "06/09/2021",
                  "Event Time": "04/09/2021",
                  category: "meeting3",
                  location: "test location3",
                  active: false,
                },
                {
                  "Event Name": "test event4",
                  "start date": "06/09/2021",
                  "end date": "07/09/2021",
                  "Event Time": "04/09/2021",
                  category: "meeting4",
                  location: "test location4",
                  active: false,
                },
              ]}
            /> */}
            {eventList.length > 0 ?
                   <EnhancedTable inputData={eventList} /> : null}
            <h1 style={{ margin: "20px 0" }}>Users</h1>
            <EnhancedTable inputData={users} tableType="user" />
            {/* <AdminUserTable
              pageOptions={[2, 5, 6]}
              rowsPerPage={2}
              order="asc"
              orderBy="Name"
              tableHead={["Name", "Email"]}
              datas={[
                {
                  Name: "test1",
                  Email: "123@test.com",
                  Verified: true,
                },
                {
                  Name: "test2",
                  Email: "486@test.com",
                  Verified: false,
                },
                {
                  Name: "test3",
                  Email: "726@test.com",
                  Verified: true,
                },
                {
                  Name: "test4",
                  Email: "kfj@test.com",
                  Verified: true,
                },
                {
                  Name: "test5",
                  Email: "262@test.com",
                  Verified: true,
                },
              ]}
            /> */}
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
        </MainContainer>
      </>
    );
  }
}

export default AdminTools;
