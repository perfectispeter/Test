import React, { Component } from "react";
import "./Calendar.css";
import Header from "../../components/Header/Header";
import TitleCard from "../../components/TitleCard/TitleCard";
import { Grid, Switch } from "@material-ui/core";
import BasicCalendar from "../../components/Calendar/Calendar";
import CategoryTags from "../../components/CategoryTags/CategoryTags";
import Footer from "../../components/Footer/Footer";
import MainContainer from "../../components/MainContainer/MainContainer";
import CustomButton from "../../components/CustomButton/CustomButton";
import { Link } from "react-router-dom";
import EventToCalendarConverter from "../../components/Calendar/EventToCalendarConverter";
import axios from "axios";

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shownEvents: this.props.data,
      selectable: true,
      filters: [],
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

  filtering(newFilters) {
    console.log("newFilters: ", newFilters);
    this.setState({ filters: newFilters });
  }

  render() {
    return (
      <>
        <Header
          items={[
            { name: "Home", link: "/", active: true },
            { name: "Calendar", link: "/calendar", active: false },
            { name: "MyPage", link: "/mypage", active: false },
          ]}
        />
        <MainContainer>
          <Grid
            container
            alignItems="center"
            alignContent="stretch"
            justifyContent="flex-start"
            direction="column"
            spacing={2}
            xs={3}
            s={3}
            md={6}
            lg={12}
            xl={12}
          >
            <TitleCard titleText="Main Calendar" />
          </Grid>
          <Grid
            container
            spacing={2}
            direction="row"
            alignItems="center"
            xs={3}
            s={3}
            md={6}
            lg={12}
            xl={12}
          >
            <Grid item>
              <BasicCalendar />
            </Grid>
            <Grid item>
              <h3>
                Filter by category: <Switch />
              </h3>
              <CategoryTags />
            </Grid>
            <Grid item>
              <Link to="/create">
                <CustomButton btntext="Create an Event " />
              </Link>
            </Grid>
          </Grid>
          <br />
          <Footer />
        </MainContainer>
      </>
    );
  }
}
