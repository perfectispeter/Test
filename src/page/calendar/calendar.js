import React, { Component } from "react";
import "./calendar.css";
import Header from "../../component/header/header";
import TitleCard from "../../component/titleCard";
import { Grid, Switch } from "@material-ui/core";
import BasicCalendar from "../../component/calendar";
import CategoryImages from "../../component/categoryTags/CategoryImages";
import Footer from "../../component/Footer";
import MainContainer from "../../component/maincontainer/mainContainer";
import CustomButton from "../../component/custombutton/custombutton";
import { Link } from "react-router-dom";

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectable: true,
    };
  }
  render() {
    return (
      <>
        <Header
          items={[
            { name: "Home", link: "/", active: false },
            { name: "calendar", link: "/calendar", active: true },
            { name: "mypage", link: "/mypage", active: false },
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
            xl={12}>
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
            xl={12}>
            <Grid item>
              <BasicCalendar />
            </Grid>
            <Grid item>
              <h3>
                Filter by category: <Switch />
              </h3>
              <CategoryImages />
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
