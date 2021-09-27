import React, { Component } from "react";
import Header from "../../component/header/header";
import MainContainer from "../../component/maincontainer/mainContainer";
import ImgTitle from "../../component/imgtitle/imgtitle";
import { TextField, Avatar } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  // KeyboardDatePicker,
  TimePicker,
  DatePicker,
} from "@material-ui/pickers";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";
import TagFacesIcon from "@material-ui/icons/TagFaces";
import Grow from "@material-ui/core/Grow";

import "./addEvent.css";
import CustomButton from "../../component/custombutton/custombutton";

class AddEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: Date.now(),
      endDate: Date.now(),
      startTime: Date.now(),
      endTime: Date.now(),
      selectedCategories: [],
      categories: [
        {
          key: 0,
          label: "All Ages",
          avatar: "./images/All Ages.jpg",
          checked: false,
        },
        { key: 1, label: "Art", avatar: "./images/art.jpg", checked: false },
        {
          key: 2,
          label: "Bushfire Recovery",
          avatar: "./images/Bushfire Recovery.jpg",
          checked: false,
        },
        {
          key: 3,
          label: "Education & Training",
          avatar: "./images/Education & Training.jpg",
          checked: false,
        },
        {
          key: 4,
          label: "Entertainment",
          avatar: "./images/Entertainment.jpg",
          checked: false,
        },
        {
          key: 5,
          label: "Events",
          avatar: "./images/Events.png",
          checked: false,
        },
        {
          key: 6,
          label: "Information",
          avatar: "./images/Information.jpg",
          checked: false,
        },
        {
          key: 7,
          label: "Seniors",
          avatar: "./images/Seniors.jpg",
          checked: false,
        },
        {
          key: 8,
          label: "Social & Support Groups",
          avatar: "./images/Social & Support Groups.jpg",
          checked: false,
        },
        {
          key: 9,
          label: "Sport",
          avatar: "./images/sport.jpg",
          checked: false,
        },
        {
          key: 10,
          label: "Young Families",
          avatar: "./images/Young Families.jpg",
          checked: false,
        },
        {
          key: 11,
          label: "Youth",
          avatar: "./images/Youth.jpg",
          checked: false,
        },
      ],
    };
  }

  startDateChange(date) {
    this.setState({
      startDate: date,
    });
  }

  endDateChange(date) {
    this.setState({
      endDate: date,
    });
  }

  checkChange(category) {
    if (category.checked) {
      this.setState({
        selectedCategories: this.state.selectedCategories.filter(
          (item) => item.key !== category.key
        ),
        categories: this.state.categories.map((item) => {
          if (item.key === category.key) {
            category.checked = !category.checked;
            return category;
          }
          return item;
        }),
      });
    } else {
      this.setState({
        selectedCategories: [
          ...this.state.selectedCategories,
          {
            key: category.key,
            label: category.label,
          },
        ],
        categories: this.state.categories.map((item) => {
          if (item.key === category.key) {
            item.checked = !item.checked;
          }
          return item;
        }),
      });
    }
  }

  handleDelete(category) {
    console.log(this.state.selectedCategories);
    this.setState({
      selectedCategories: this.state.selectedCategories.filter(
        (item) => item.key !== category.key
      ),
      categories: this.state.categories.map((item) => {
        if (item.key === category.key) {
          item.checked = !item.checked;
        }
        return item;
      }),
    });
  }

  startTimeChange(date) {
    this.setState({
      startTime: date,
    });
  }

  endTimeChange(date) {
    console.log(typeof date);
    this.setState({
      endTime: date,
    });
  }
  render() {
    return (
      <>
        <Header
          items={[
            { name: "Home", link: "/", active: false },
            { name: "calendar", link: "/canlendar", active: true },
            { name: "mypage", link: "/mypage", active: false },
          ]}
        />
        <MainContainer>
          <ImgTitle title="Add Event" />
          <div className="inputForm">
            <TextField label="Event Title" variant="outlined" />
            <TextField label="Venue" variant="outlined" />
            <TextField
              label="Description"
              multiline
              variant="outlined"
              minRows={4}
            />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              {/* <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Date picker inline"
                value={this.state.selectedDate}
                onChange={this.handleDateChange.bind(this)}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              /> */}
              <div
                style={{
                  display: "inline-flex",
                  margin: "10px 0",
                  justifyContent: "space-between",
                }}>
                <DatePicker
                  style={{ width: "45%", margin: "0,auto,0,0" }}
                  format="MM/dd/yyyy"
                  label="Start Date"
                  inputVariant="outlined"
                  value={this.state.startDate}
                  onChange={this.startDateChange.bind(this)}
                />
                <DatePicker
                  style={{ width: "50%" }}
                  format="MM/dd/yyyy"
                  label="End Date"
                  inputVariant="outlined"
                  value={this.state.endDate}
                  onChange={this.endDateChange.bind(this)}
                />
              </div>
              <div
                style={{
                  display: "inline-flex",
                  margin: "10px 0",
                  justifyContent: "space-between",
                }}>
                <TimePicker
                  style={{ width: "45%" }}
                  label="Start Time"
                  inputVariant="outlined"
                  value={this.state.startTime}
                  onChange={this.startTimeChange.bind(this)}
                />
                <TimePicker
                  style={{ width: "50%" }}
                  label="End Time"
                  inputVariant="outlined"
                  value={this.state.endTime}
                  onChange={this.endTimeChange.bind(this)}
                />
              </div>
            </MuiPickersUtilsProvider>
            <Paper
              style={{
                padding: "30px",
                minHeight: "120px",
                marginTop: "30px",
                display: "flex",
                flexWrap: "wrap",
              }}
              elevation={3}>
              {this.state.selectedCategories.length === 0 ? (
                <>Choice Categories</>
              ) : (
                this.state.selectedCategories.map((category) => {
                  return (
                    <Grow in={true}>
                      <Chip
                        style={{ margin: "10px" }}
                        key={category.key}
                        icon={<TagFacesIcon />}
                        label={category.label}
                        onDelete={this.handleDelete.bind(this, category)}
                      />
                    </Grow>
                  );
                })
              )}
            </Paper>
            <div className="categoriesBox">
              {this.state.categories.map((category) => {
                return (
                  <div
                    className={category.checked ? "checkedBox" : "uncheckedBox"}
                    key={category.key}>
                    <Grow in={true}>
                      <FormControlLabel
                        className="categoryCheck"
                        control={
                          <>
                            <Avatar
                              alt={category.label}
                              src={category.avatar}
                              style={{ width: "80px", height: "80px" }}
                            />
                            <Checkbox
                              checked={category.checked}
                              onChange={this.checkChange.bind(this, category)}
                              name="checkedB"
                              color="primary"
                            />
                          </>
                        }
                        label={category.label}
                      />
                    </Grow>
                  </div>
                );
              })}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                margin: "0 0 50px 0",
              }}>
              <CustomButton btntext="Add" />
              <CustomButton btntext="Cancel" />
            </div>
          </div>
        </MainContainer>
      </>
    );
  }
}

export default AddEvent;
