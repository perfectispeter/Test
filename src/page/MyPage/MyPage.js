import React from 'react';
import { Grid } from '@material-ui/core';
import Header from '../../component/header/header';


class MyPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userDisplayName: "Gemma Whitehead",
            userEmail: "gemma@corryongnc.org",
            userPassword: "*********",
        }
    }



    render() {
        return (
            <>
            
            <Header />
            <div className="mainContainer">
                <h1>MyPage Title</h1>
            </div>
            </>
        );
    }

}

export default MyPage;






