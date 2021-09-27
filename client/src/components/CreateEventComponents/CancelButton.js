import React from 'react';
import './CreateEvent.css'

class CancelButton extends React.Component{
  state = {
    count : 0
  }
  
  render(){
    return(
      
    <button className="CancelButton" onClick={()=>{           
    console.log('cancelled')}}>Cancel</button>
    )
  }
}

export default CancelButton;