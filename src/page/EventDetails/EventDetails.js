import React from "react";
import userdata from "../../asset/userdata.json";
import { Card, Tooltip, IconButton } from "@material-ui/core";
import { Star, StarBorder } from "@material-ui/icons";
import axios from "axios";

//TODO: call Event and User Details from DB
const EventDetails = (props) => {
  const { eventID, inputData, userID } = props;

  // componentDidMount() {
  //   // console.log("Print id: " + this.props.match.params.id);
  //   axios
  //     .get("http://localhost:8082/api/events/" + this.props.match.params.id)
  //     .then((res) => {
  //       // console.log("Print-showEventDetails-API-response: " + res.data);
  //       this.setState({
  //         event: res.data,
  //       });
  //     })
  //     .catch((err) => {
  //       console.log("Error from ShowEventDetails");
  //     });
  // }


  function toggleBookmark(value,user,event){
    // value ? user.bookmarked_events.push(event) 
    //       : user.bookmarked_events = user.bookmarked_events.filter(e => e.id != event)
  }

  let content = (
    <>
      <Card>
        <i>Select an event to view details</i>
      </Card>
    </>
  );

  if (eventID) {
    var thisEvent = inputData.find(e => e.id === eventID);
    var thisUser = userdata.users.find(u => u.id === userID);
    content = (
      <>
        <Card>
          <p>
            <b>{thisEvent.title}</b>
          </p>
          <p>
            Created by:{" "}
            <a href={"/user/" + thisEvent.creator}>
              {thisEvent.creator}
            </a>
          </p>
          <p>When: {thisEvent.start.toISOString()}</p>
          <p>
            {thisEvent.desc ? (
              thisEvent.desc
            ) : (
              <i>No description</i>
            )}
          </p>
          <p>
            {thisEvent.categories ?
              thisEvent.categories.join(", ")
                : <i>No categories</i>
              }
          </p>
          <p>
            {thisUser.bookmarked_events.includes(thisEvent.id) ?
              <Tooltip title="Click to remove from bookmarks">
                <IconButton onClick={toggleBookmark(false,thisUser,thisEvent.id)}><Star /> </IconButton>
                </Tooltip> 
              : <Tooltip title="Click to add to bookmarks">
                <IconButton onClick={toggleBookmark(true,thisUser,thisEvent.id)}><StarBorder /></IconButton>
                  </Tooltip>}
          </p>
        </Card>
      </>
    );
  }

  return content;
};

export default EventDetails;
