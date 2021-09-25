import React from "react";
import CreateButton from "../../components/CreateEventComponents/CreateButton";
import TextField from "../../components/CreateEventComponents/TextField";
import TextArea from "../../components/CreateEventComponents/TextArea";
import CancelButton from "../../components/CreateEventComponents/CancelButton";
import "../../components/CreateEventComponents/CreateEvent.css";
import Header from "../../components/header/header";
import Footer from "../../components/Footer/Footer";
// import "react-datepicker/dist/react-datepicker.css";
import CategoryImages from "../../components/categoryTags/CategoryImages";
import TimePickers from "../../components/CreateEventComponents/TimePicker";
import DatePickers from "../../components/CreateEventComponents/DatePicker";
import ImgDialog from "../../components/imgDialog/imgdialog";
import axios from "axios";

class CreateEvent extends React.Component {
  constructor() {
    super();
    this.state = {
      event_title: "",
      event_creator_id: "",
      event_description: "",
      event_start_date_time: "",
      event_end_date_time: "",
      event_update_date_time: "",
      event_category: "",
      event_link: "",
      //TODO temporarily set to true
      event_active: "true",
      event_image_url: "",
      imgDialogOpen: false,
      selectedFilters: [],
    }
  }

  filtering(newFilters) {
     this.setState({selectedFilters: newFilters});
     //TODO temporarily just takes the first Category
     this.setState({event_category: newFilters.toString()});
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const data = {
      event_title: this.state.event_title,
      event_creator_id: this.state.event_creator_id,
      event_description: this.state.event_description,
      event_start_date_time: this.state.event_start_date_time,
      event_end_date_time: this.state.event_end_date_time,
      event_update_date_time: this.state.event_update_date_time,
      event_category: this.state.event_category,
      event_link: this.state.event_link,
      event_active: this.state.event_active,
      event_image_url: this.state.event_image_url,
    };

    console.log("Submitting these details to backend: ",data);

    axios
      .post(process.env.REACT_APP_MY_URL + "api/events", data)
      .then((res) => {
        this.setState({
          event_title: "",
          event_creator_id: "",
          event_description: "",
          event_start_date_time: "",
          event_end_date_time: "",
          event_update_date_time: "",
          event_category: "",
          event_link: "",
          event_active: "",
          event_image_url: "",
        });
        alert("Event created!");
        // this.props.history.push("/calendar");
      })
      .catch((err) => {
        console.log("Error in CreateEvent!");
      });
  };

  imgUploadOpen = () => {
    this.setState({
      imgDialogOpen: true,
    });
  };

  closeImgUpload(imgurl) {
    if (imgurl !== "") {
      this.setState({
        imgDialogOpen: false,
        event_image_url: imgurl,
      });
    } else {
      this.setState({
        imgDialogOpen: false,
      });
    }
  }

  render() {
    return (
      <>
        <div className="Body1">
          <div>
            <Header></Header>
          </div>
          <div className="Main">
            <h2>Create an Event</h2>
            <form noValidate onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Title of the Event"
                    name="event_title"
                    className="form-control"
                    value={this.state.event_title}
                    onChange={this.onChange}
                  />
                </div>
                <br />
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Event Created By"
                    name="event_creator_id"
                    className="form-control"
                    value={this.state.event_creator_id}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Event Description"
                    name="event_description"
                    className="form-control"
                    value={this.state.event_description}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="date"
                    placeholder="Event Start Date"
                    name="event_start_date_time"
                    className="form-control"
                    value={this.state.event_start_date_time}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="date"
                    placeholder="Event End Date"
                    name="event_end_date_time"
                    className="form-control"
                    value={this.state.event_end_date_time}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="date"
                    placeholder="Event Last Updated"
                    name="event_update_date_time"
                    className="form-control"
                    value={this.state.event_update_date_time}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  {/* <input
                    type="text"
                    placeholder="Event Categories"
                    name="event_category"
                    className="form-control"
                    value={this.state.event_category}
                    onChange={this.onChange}
                  /> */}
                  <CategoryImages onChange={selectedTags =>
                    this.filtering(selectedTags)}/>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Event Link to Register"
                    name="event_link"
                    className="form-control"
                    value={this.state.event_link}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  {/* <input
                    type="text"
                    placeholder="Event Active"
                    name="event_active"
                    className="form-control"
                    disabled={true}
                    value="true"
                    onChange={this.onChange}
                  /> */}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Event Image URL"
                    name="event_image_url"
                    className="form-control"
                    value={this.state.event_image_url}
                    onChange={this.onChange}
                    onFocus={this.imgUploadOpen}
                  />
                  {/* <button onClick={this.imgUploadOpen}>Event Image</button>
                  <ImgDialog 
                    open={this.state.imgDialogOpen}
                    close={this.closeImgUpload.bind(this)}
                    title="Event Image"
                    content="Upload Image"
                    url={this.state.event_image_url}
                    onChange={this.onChange}
                    multiline={true}
                  /> */}
                </div>
                <input
                  type="submit"
                  className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
            {/* <TextField title="Event Title" onChange={this.onChange}></TextField>
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
            <CancelButton></CancelButton> */}
          </div>
          <div></div>
        </div>
      </>
    );
  }
}

export default CreateEvent;
