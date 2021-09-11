import React from 'react';
import './CreateEvent.css';

class TextField extends React.Component{

state = {
    txt: ''
}

handleText = e =>{

this.setState({
    txt: e.target.value
})

}
    render(){
     return(
         <div className="CreateEventItem">
             <h3>{this.props.title}</h3>
             <input className="TextField" type="text" value={this.state.txt} onChange ={this.handleText}></input>
         </div>
     )


    }
        

    
    
}
export default TextField;