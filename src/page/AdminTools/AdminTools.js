  
import React from 'react';
import Header from '../../components/header/header';
import EnhancedTable from '../../components/EnhancedTable/EnhancedTable';
import Footer from '../../components/Footer/Footer';

import data from "../../asset/eventdata";

class AdminTools extends React.Component{
 
    render(){
      return(
          <div className="Body">
              <Header></Header>
               <div style={{marginTop:'200px'}}>
                   <h1>Admin Tools</h1>
                   <EnhancedTable inputData={data} />
               </div>
               <Footer></Footer>


          </div>
       
      )
    }
  }
  
  export default AdminTools;