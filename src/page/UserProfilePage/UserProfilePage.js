import React from 'react';
import Header from '../../component/header/header';
import './UserProfilePage.css';

class OrganizationProfile extends React.Component{
 
    render(){
      return(
          <div className="Body">
              <Header></Header>
               <div className="main">
               <input className="Text" type="text" size="40" value="organization profile content"/>
               </div>
               <div style={{marginTop:'35px'}}>
                   <h1>Contact details</h1>
                   Email:s3798346@student.rmit.edu.au
                   <br></br>
                   Mobile；0422684008
                   <br></br>
                   Website:www.google.com
               </div>
               <button style={{color: 'rgb(252, 250, 250)',backgroundColor:'rgb(135, 33, 231)' ,marginTop:'15px',width:'120px'}}>BookNow!</button>



          </div>
       
      )
    }
  }
  
  export default OrganizationProfile;