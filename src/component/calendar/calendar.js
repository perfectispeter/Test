import React, {Component, useEffect} from 'react'
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import data from "../../asset/eventdata";
import { PropTypes } from 'prop-types';

import "react-big-calendar/lib/css/react-big-calendar.css";
import { Dialog, DialogTitle, TableBody, Table, TableHead, TableRow, TableCell, IconButton, Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';


const localizer = momentLocalizer(moment);
const propTypes = {}

// class BasicCalendar extends React.Component{
//   constructor(...args){
//     super(...args)

//     this.state = { data }
//   }

//   handleSelect = ({ start, end }) => {
//     const title = window.prompt('New Event name')
//     if (title)
//       this.setState({
//         data: [
//           ...this.state.data,
//           {
//             start,
//             end,
//             title,
//           },
//         ],
//       })
//   }

//   render(){
//     const { localizer } = this.props
//     return(
//       <Calendar
//         selectable
//         localizer = { localizer }
//         events={this.state.data}
//         defaultView={Views.MONTH}
//         scrollToTime={new Date()}
//         defaultDate={new Date()}
//         onSelectEvent={data => alert(data.title)}
//         onSelectSlot={this.handleSelect}
//       />

//     )
//   }

// }

// function EventDetailsDialog(props) {
//   const { onClose, open, eventDetails } = props;

//   const handleClose = () => {
//     onClose();
//   };

//   const handleButtonClick = (value) => {
//     alert("taken to event page:" + {value});
//   };

//   return (
//     <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
//       <DialogTitle id="simple-dialog-title">{eventDetails.title}</DialogTitle>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell>Start</TableCell>
//             <TableCell>End</TableCell>
//             <TableCell>Description</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//         <TableRow>
//             <TableCell>{eventDetails.start}</TableCell>
//             <TableCell>{eventDetails.end}</TableCell>
//             <TableCell>{eventDetails.desc}</TableCell>
//           </TableRow>
//         </TableBody>
//       </Table>
//       <Button onClick={handleButtonClick(eventDetails.title)}> </Button>
//     </Dialog>
//   );
// }

// EventDetailsDialog.propTypes = {
//   onClose: PropTypes.func.isRequired,
//   open: PropTypes.bool.isRequired,
  
// };

const BasicCalendar = (props) => {
  const actualCalendar = <Calendar
                            localizer={localizer}
                            defaultDate={new Date()}
                            defaultView="month"
                            events={data}
                            style={{ height: "100vh" }}
                            onSelectEvent={data => showEventDetails(data)}                           
                          />;

  const history = useHistory();

  function showEventDetails(event){
    history.push("/calendar?" + event.id);
  }
  
    return (<>
      <div className="BasicCalendar">
        {actualCalendar}
      </div>
      </>
    );
  
}

BasicCalendar.propTypes = propTypes;

export default BasicCalendar;