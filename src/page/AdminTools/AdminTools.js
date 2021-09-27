  
import React from 'react';
import Header from '../../components/header/header';
import EnhancedTable from '../../components/EnhancedTable/EnhancedTable';
import Footer from '../../components/Footer/Footer';

import data from "../../asset/eventdata";
import users from "../../asset/userdata.json";
import axios from "axios";
import EventToCalendarConverter from "../../components/calendar/EventToCalendarConverter";

class AdminTools extends React.Component{
  constructor(props){
    super(props);
    this.state = {
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
 
    render(){
      const eventList = this.state.eventsFromBackend;

      return(
          <div className="Body">
              <Header></Header>
               <div style={{marginTop:'200px'}}>
                   <h1>Admin Tools</h1>
                   {eventList.length > 0 ?
                   <EnhancedTable inputData={eventList} /> : null}
                   <EnhancedTable inputData={users} tableType="user" />
               </div>
               <Footer></Footer>


          </div>
       
      )
    }
  }
  
  export default AdminTools;