import React from "react";
import CreateButton from "../../components/CreateEventComponents/CreateButton";
import TextField from "../../components/CreateEventComponents/TextField";
import TextArea from "../../components/CreateEventComponents/TextArea";
import CancelButton from "../../components/CreateEventComponents/CancelButton";
import "../../components/CreateEventComponents/CreateEvent.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "react-datepicker/dist/react-datepicker.css";
import CategoryImages from "../../components/CategoryTags/CategoryImages";
import TimePickers from "../../components/CreateEventComponents/TimePicker";
import DatePickers from "../../components/CreateEventComponents/DatePicker";

class CreateEvent extends React.Component {
  render() {
    return (
      <>
        <div className="Body1">
          <div>
            <Header></Header>
          </div>
          <div className="Main">
            <h2>Create an Event</h2>
            <TextField title="Event Title"></TextField>
            <TextField title="Venue"></TextField>
            <CategoryImages
              onChange={(selectedTags) =>
                console.log("These tags are selected:", selectedTags)
              }
            />
            <DatePickers title="StartDate" />
            <DatePickers title="EndDate" />
            <br />
            <TimePickers title="StartTime" />
            <TimePickers title="EndTime" />
            <TextArea title="Description"></TextArea>
            <CreateButton></CreateButton>
            <CancelButton></CancelButton>
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default CreateEvent;
