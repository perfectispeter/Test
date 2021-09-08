import React, { Component } from "react";
import "./calendar.css";
import Header from "../../component/header/header";
import TitleCard from "../../component/titleCard";
import { Grid, Table, TableBody, TableCell, Card, TableRow, Switch } from "@material-ui/core";
import BasicCalendar from "../../component/calendar";
import Category from "../../component/categoryTags/Category";
import CategoryImages from "../../component/categoryTags/CategoryImages";

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectable: true,
    };
  }
  render() {
    return ( <>
      <div className="mainContainer">
      <Header />
      <Grid container alignItems="center" 
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
        <Grid container spacing={2} direction="row" alignItems="center"
                xs={3}
                s={3}
                md={6}
                lg={12}
                xl={12}>
              <Grid item>
                <BasicCalendar />
              </Grid>
              <Grid item>
                    <h3>Filter by category: <Switch /></h3>
                  <CategoryImages />
              </Grid>
        </Grid>
        <br />
        <Table padding="normal">
          <TableBody>

          {/* <TableRow>
              <TableCell>
                <h3>Filter by category: <Switch /></h3>
              </TableCell>
            </TableRow> */}

          <TableRow>

          <TableCell>
              
              </TableCell>
            <TableCell>

            </TableCell>
          {/* </TableRow>

          <TableRow>  */}

            </TableRow>

          </TableBody>
        </Table>

            
        
        
      </div>
    </>
    );
  }

}
