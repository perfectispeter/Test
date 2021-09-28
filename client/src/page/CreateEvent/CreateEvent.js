import React from "react";
import CreateButton from "../../components/CreateEventComponents/CreateButton";
import TextField from "../../components/CreateEventComponents/TextField";
import TextArea from "../../components/CreateEventComponents/TextArea";
import CancelButton from "../../components/CreateEventComponents/CancelButton";
import "../../components/CreateEventComponents/CreateEvent.css";
import Header from "../../components/Header/Header";
import "react-datepicker/dist/react-datepicker.css";
import CategoryTags from "../../components/categoryTags/CategoryTags";
import TimePickers from "../../components/CreateEventComponents/TimePicker";
import DatePickers from "../../components/CreateEventComponents/DatePicker";
import MainContainer from "../../components/maincontainer/mainContainer";

class CreateEvent extends React.Component {
  render() {
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
          <h2>Create an Event</h2>
          <TextField title="Event Title"></TextField>
          <TextField title="Venue"></TextField>
          <CategoryTags />
          <DatePickers title="StartDate" />
          <DatePickers title="EndDate" />
          <br />
          <TimePickers title="StartTime" />
          <TimePickers title="EndTime" />
          <TextArea title="Description"></TextArea>
          <CreateButton></CreateButton>
          <CancelButton></CancelButton>
        </MainContainer>
      </>
    );
  }
}

export default CreateEvent;
