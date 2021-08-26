import React from 'react';
import { Grid, Card, Button } from '@material-ui/core';

import Header from '../../component/header/header';
import { minHeight } from '@material-ui/system';



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
            <Grid alignItems="center" justifyContent="center" direction="column" container spacing={2}>
                <Grid item xs={3}>
                <h1>MyPage Title</h1>
                </Grid>
                <Grid item><Card>
                <table>
                    <tr>
                        <td><h2>Name: </h2> </td>
                        <td>&nbsp;</td>
                        <td>{this.state.userDisplayName}</td>
                    </tr>
                    <hr/>
                    <tr>
                        <td><h2>Email: </h2></td>
                        <td>&nbsp;</td>
                        <td>{this.state.userEmail}</td>
                    </tr>
                    <hr/>
                    <tr>
                        <td><h2>Password: </h2></td>
                        <td>&nbsp;</td>
                        <td>{this.state.userPassword}</td>
                    </tr>
                    <hr/>
                    </table>
                </Card></Grid>
                <Grid item>
                <tr>
                    <td><div className="flex flex-center">
                        <button className="btn">Edit my Profile</button>
                    </div></td>
                    <td><div className="flex flex-center">
                        <button className="btn">View my Profile</button>
                    </div></td>
                </tr>
                </Grid>
            </Grid>
            </div>
            </>
        );
    }

}

export default MyPage;






