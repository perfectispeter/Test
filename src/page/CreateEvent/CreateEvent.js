import React from 'react';
import CreateButton from '../../component/CreateEventComponents/CreateButton';
import TextField from '../../component/CreateEventComponents/TextField';
import TextArea from '../../component/CreateEventComponents/TextArea';
import CancelButton from '../../component/CreateEventComponents/CancelButton';
import '../../component/CreateEventComponents/CreateEvent.css';
import Header from '../../component/header/header';
import 'react-datepicker/dist/react-datepicker.css'
import CategoryImages from '../../component/categoryTags/CategoryImages';
import TimePickers from '../../component/CreateEventComponents/TimePicker';
import DatePickers from '../../component/CreateEventComponents/DatePicker';


class CreateEvent extends React.Component{
 
    render(){
      return(
        <div className="Body1"> 
        <div>
          <Header></Header>
          </div> 
          <div className="Main">
            <TextField title="Event Title"></TextField>
            <TextField title="Venue"></TextField>
            <CategoryImages />
            <DatePickers title="StartDate"/>
            <DatePickers title="EndDate"/>
            <br/>
            <TimePickers title="StartTime"/>
            <TimePickers title="EndTime"/>
            <TextArea title="Description"></TextArea>
                <CreateButton></CreateButton>
                <CancelButton></CancelButton>
          </div>
      </div>
      )
    }
  }
  
  export default CreateEvent;