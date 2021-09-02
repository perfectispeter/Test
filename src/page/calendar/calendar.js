import React, { Component } from "react";
import "./calendar.css";
import Header from "../../component/header/header";
import TitleCard from "../../component/titleCard";
import { Grid, Table, TableBody, TableCell, Card } from "@material-ui/core";
import BasicCalendar from "../../component/calendar";

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectAble: true,
    };
  }
  render() {
    return ( <>
      <div className="mainContainer">
      <Header />
      <Grid alignItems="center" 
                justifyContent="flex-start" 
                direction="column" 
                container spacing={2}
                xs={3}
                s={3}
                md={6}
                lg={12}
                xl={12}
            >
        <TitleCard titleText="Main Calendar" />
        </Grid>
        <br />
        <Table padding="normal">
          <TableBody>
          
          <TableCell>
          <Card raised={true}>
            <BasicCalendar />
            </Card>
            </TableCell>

              <TableCell>
              <Card>
              Category list placeholder
              </Card>
                
              </TableCell>
          </TableBody>
        </Table>

            
        
        
      </div>
    </>
    );
  }

}
