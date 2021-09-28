import React from 'react';
import './CreateEvent.css';

class TextArea extends React.Component{

state = {
    content: ''
}

handleContent = e =>{

this.setState({
    content: e.target.value
})

}
    render(){
     return(
         <div className="CreateEventItem">
             <h3>{this.props.title}</h3>
             <textarea className="TextArea" value={this.state.content} onChange ={this.handleContent}></textarea>
         </div>
     )


    }
        

    
    
}
export default TextArea;