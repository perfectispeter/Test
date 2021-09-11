import React from 'react';
import Header from '../../component/header/header';
import './UserProfilePage.css';

class OrganizationProfile extends React.Component{
 
    render(){
      return(
          <div className="Body">
              <Header></Header>
               <div className="main">
               {/* <input className="Text" type="text" size="40" value="organization profile content"/> */}
               <h1 className="Text" type = "text">{window.location.pathname.replace("/user/","")}</h1>
               </div>
               <div style={{marginTop:'35px'}}>
                   <h2>Contact details</h2>
                   Email: test@example.com
                   <br></br>
                   Mobile: 0412 345 678
                   <br></br>
                   Description: Some text that this user can edit. Click "More Info" to go to our website.
               </div>
               <a href="https://corryongnc.org/"><button style={{color: 'rgb(252, 250, 250)',backgroundColor:'rgb(135, 33, 231)' ,marginTop:'15px',width:'120px'}}>More Info</button></a>



          </div>
       
      )
    }
  }
  
  export default OrganizationProfile;