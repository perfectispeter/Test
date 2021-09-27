import React from "react";
import {
  Grid,
  Card,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Accordion,
  AccordionSummary,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import Header from "../../components/Header/Header";
import TitleCard from "../../components/titleCard/titleCard";

import EnhancedTable from "../../components/EnhancedTable/EnhancedTable";
import BasicCalendar from "../../components/calendar";
import Textdialog from "../../components/textDialog/textdialog";
import Footer from "../../components/Footer";
import FormDialog from "../../components/FormDialog/FormDialog";

import data from "../../asset/eventdata";
import userData from "../../asset/userdata.json";

import axios from "axios";
import EventToCalendarConverter from "../../components/calendar/EventToCalendarConverter";

class MyPage extends React.Component {
  constructor(props) {
    super(props);
    // var { userID } = props; <<<<< TODO
    var userID = 0;
    const users = userData;

    this.state = {
      userID: userID,
      userDisplayName: users.users.filter((u) => u.id === userID)[0]
        .display_name,
      userEmail: users.users.filter((u) => u.id === userID)[0].email,
      userPassword: users.users.filter((u) => u.id === userID)[0].password,
      changeDisplayName: false,
      changeEmail: false,
      changePassword: false,
      eventsFromBackend: []
    };
  }

  componentDidMount() {
    axios
      .get(process.env.REACT_APP_MY_URL + "api/events")
      .then((res) => {
        this.setState({
          eventsFromBackend: EventToCalendarConverter(res.data),
        });
        // this.state.eventsFromBackend.push(EventToCalendarConverter(res.data));
        // console.log("Current events from back end: ",this.state.eventsFromBackend);
      })
      .then(
        console.log("Current events from back end (after .then): ",this.state.eventsFromBackend)
      )
      .catch((err) => {
        console.log("Error from ShowEventList: ", err);
      });
  }

  editDisplayName = () => {
    this.setState({
      changeDisplayName: true,
    });
  };

  editEmail = () => {
    this.setState({
      changeEmail: true,
    });
  };

  editPassword = () => {
    this.setState({
      changePassword: true,
    });
  };

  closeDisplayNameDialog(value) {
    if (value !== "") {
      this.setState({
        changeDisplayName: false,
        userDisplayName: value,
      });
    } else {
      this.setState({
        changeDisplayName: false,
      });
    }
  }

  closeEmailDialog(value) {
    if (value !== "") {
      this.setState({
        changeEmail: false,
        userEmail: value,
      });
    } else {
      this.setState({
        changeEmail: false,
      });
    }
  }

  closePasswordDialog(value) {
    if (value !== "") {
      this.setState({
        changePassword: false,
        userPassword: value,
      });
    } else {
      this.setState({
        changePassword: false,
      });
    }
  }

  render() {
    const eventList = this.state.eventsFromBackend;
    console.log("eventlist:",eventList);

    var calendarComponent = 
    <BasicCalendar 
        eventData = {allMyEvents(this.state.userID)}
      />;

    function myCreatedEvents (user) {
      const eventArray = eventList.filter(e => e.creator && e.creator.includes(user));
      return eventArray;
    };

    function myBookmarkedEvents (user) {
      const eventArray = eventList.filter(e => userData.users.at(user).bookmarked_events.includes(e.id));
      return eventArray;
    }

    function allMyEvents (user) {
      const eventArray = myBookmarkedEvents(user).concat(myCreatedEvents(user));
      return eventArray;
    }

    return (
      <>
        <div className="header">
          <Header isHomepage={false}/>
        </div>
        <div className="mainContainer">
          <Grid
            alignItems="center"
            justifyContent="flex-start"
            direction="column"
            container
            spacing={2}
            xs={3}
            s={3}
            md={6}
            lg={12}
            xl={12}
          >
            <TitleCard titleText="MyPage" />
            <Grid container alignItems="stretch" direction="column" xl={6}>
              <Accordion>
                <AccordionSummary
                  aria-controls="user-details-content"
                  id="user-details-header"
                  expandIcon={<ExpandMore />}
                >
                  <h2>My Details</h2>
                </AccordionSummary>
                <Grid container alignItems="center" direction="column">
                  <Grid item>
                    <Card fullWidth={true}>
                      <table>
                        <tr>
                          <td>
                            <h2>Name: </h2>{" "}
                          </td>
                          <td>&nbsp;</td>
                          <td>{this.state.userDisplayName}</td>
                          <td>
                            <button
                              className="btn"
                              size="small"
                              onClick={this.editDisplayName}
                            >
                              Change
                            </button>{" "}
                          </td>
                        </tr>
                        <hr />
                        <tr>
                          <td>
                            <h2>Email: </h2>
                          </td>
                          <td>&nbsp;</td>
                          <td>{this.state.userEmail}</td>
                          <td>
                            <button
                              className="btn"
                              size="small"
                              onClick={this.editEmail}
                            >
                              Change
                            </button>{" "}
                          </td>
                        </tr>
                        <hr />
                        <tr>
                          <td>
                            <h2>Password: </h2>
                          </td>
                          <td>&nbsp;</td>
                          <td>{this.state.userPassword}</td>
                          <td>
                            <button
                              className="btn"
                              size="small"
                              onClick={this.editPassword}
                            >
                              Change
                            </button>{" "}
                          </td>
                        </tr>
                        <hr />
                      </table>
                    </Card>
                  </Grid>
                  <Grid item>
                    <Table>
                      <TableBody>
                        <TableRow>
                          <TableCell>
                            <div className="flex flex-center">
                              <FormDialog buttonText="Edit my Public Profile" />
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex flex-center">
                              <a href={"/user/" + this.state.userDisplayName}>
                                <button className="btn">
                                  View my Public Profile
                                </button>
                              </a>
                            </div>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </Grid>
                </Grid>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  aria-controls="user-events-content"
                  id="user-events-header"
                  expandIcon={<ExpandMore />}
                >
                  <h2>Events I've Created</h2>
                </AccordionSummary>
                <Grid item>
                  <Card raised={true}>
                  {this.state.eventsFromBackend.length > 0 ? 
                    <EnhancedTable inputData = {myCreatedEvents(this.state.userDisplayName)}/>
                    : null}
                  </Card>
                </Grid>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  aria-controls="user-bookmarked-content"
                  id="user-bookmarked-header"
                  expandIcon={<ExpandMore />}
                >
                  <h2>Events I've Bookmarked</h2>
                </AccordionSummary>
                <Grid item>
                  <Card raised={true}>
                  {this.state.eventsFromBackend.length > 0 ? 
                    <EnhancedTable inputData = {myBookmarkedEvents(this.state.userID)}/>
                    : null}
                  </Card>
                </Grid>
                <Grid item>
                  <Card fullWidth={true}>
                    {this.state.eventsFromBackend.length > 0 ? 
                      calendarComponent
                      : null}
                  </Card>
                </Grid>

              </Accordion>
            </Grid>

            <Grid item>
              <a href="/Calendar"> Back to Calendar</a>
            </Grid>
          </Grid>
          <Footer />

          <div name="dialog-boxes">
            <Textdialog
              open={this.state.changeDisplayName}
              close={this.closeDisplayNameDialog.bind(this)}
              title="Change Display Name"
              content="This name will be visible to other users."
              inputTitle="Enter text and click Confirm"
              multiline={false}
            />
            <Textdialog
              open={this.state.changeEmail}
              close={this.closeEmailDialog.bind(this)}
              title="Change Email"
              content="This email address will not be visible to other users."
              inputTitle="Enter text and click Confirm"
              multiline={false}
            />
            <Textdialog
              open={this.state.changePassword}
              close={this.closePasswordDialog.bind(this)}
              title="Change Password"
              content="This can be changed at any time."
              inputTitle="Enter text and click Confirm"
              multiline={false}
            />
          </div>
        </div>
      </>
    );
  }
}

export default MyPage;
