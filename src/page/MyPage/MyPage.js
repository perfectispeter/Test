import React from 'react';
import { Grid, Card } from '@material-ui/core';

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
            <Grid alignItems="center" justify="center" direction="column" container spacing={2}>
                <Grid item xs={3}>
                <h1>MyPage Title</h1>
                </Grid>
                <Card>
                <Grid direction="row" justify="center" container spacing={2}>
                    <Grid item>
                        <h2>Name: </h2> 
                    </Grid>
                    <Grid item>
                        <p>{this.state.userDisplayName}</p>
                    </Grid>
                </Grid>
                </Card>

            </Grid>
            </div>
            </>
        );
    }

}

export default MyPage;






