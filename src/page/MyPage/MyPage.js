import React from 'react';
import { Grid, Card, Button, Table, TableBody, TableCell, TableRow, TableHead } from '@material-ui/core';

import Header from '../../component/header/header';
import { minHeight } from '@material-ui/system';
import TitleCard from '../../component/titleCard/titleCard';
import SortableTable from "../../component/SortableTable";



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
            <TitleCard titleText="MyPage Title"/>
                <Grid item xs={3}>
               
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
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                            <div className="flex flex-center">
                                <button className="btn">Edit my Profile</button>
                            </div>
                            </TableCell>
                            <TableCell>
                            <div className="flex flex-center">
                                <button className="btn">View my Profile</button>
                            </div>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                </Grid>
                <Grid item>
                    <Card raised={false}>
                        <SortableTable sortableTableTitle="Events I've Created" />
                    </Card>
                </Grid>
            </Grid>
            </div>
            </>
        );
    }

}

export default MyPage;






