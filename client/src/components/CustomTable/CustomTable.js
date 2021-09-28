import React, { Component, useState, useEffect, useRef } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Grow,
  IconButton,
  TableSortLabel,
  Button,
  ButtonGroup,
  TablePagination,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import Alert from "@material-ui/lab/Alert";

function CustomAlert(props) {
  const [open, setOpen] = useState(props.open ? props.open : false);
  const timeoutRef = useRef();
  useEffect(() => {
    setOpen(props.open);
    const id = setTimeout(() => {
      props.close();
    }, 3000);
    timeoutRef.current = id;
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [props]);
  return (
    <Grow in={open}>
      <Alert
        className="alert"
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
              props.close();
              setOpen(false);
            }}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
      >
        Close me!
      </Alert>
    </Grow>
  );
}
class CustomTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alertOpen: false,
      rowsPerPage: this.props.rowsPerPage,
      page: 0,
      order: this.props.order,
      orderBy: this.props.orderBy,
      tableHead: this.props.tableHead,
      talbes: this.props.data,
    };
  }
  openAlert() {
    this.setState({
      alertOpen: true,
    });
  }
  closeAlert() {
    this.setState({
      alertOpen: false,
    });
  }
  setPage(newPage) {
    this.setState({
      page: newPage,
    });
  }

  setRowsPerPage(newPage) {
    this.setState({
      rowsPerPage: newPage,
    });
  }
  handleChangePage(event, newPage) {
    this.setPage(newPage);
  }

  handleChangeRowsPerPage(event) {
    this.setRowsPerPage(event.target.value);
    this.setPage(0);
  }
  setOrder(item) {
    this.setState({
      order: this.state.order === "asc" ? "desc" : "asc",
      orderBy: item,
    });
  }
  render() {
    return (
      <div>
        <Paper>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  {this.state.tableHead.map((item) => {
                    return (
                      <TableCell align="center" key={item}>
                        <TableSortLabel
                          hideSortIcon={false}
                          active={this.state.orderBy === item}
                          direction={this.state.order}
                          onClick={this.setOrder.bind(this, item)}
                        >
                          {item}
                        </TableSortLabel>
                      </TableCell>
                    );
                  })}
                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {stableSort(
                  this.state.talbes,
                  getComparator(this.state.order, this.state.orderBy)
                )
                  .slice(
                    this.state.page * this.state.rowsPerPage,
                    this.state.page * this.state.rowsPerPage +
                      this.state.rowsPerPage
                  )
                  .map((row) => {
                    return (
                      <TableRow key={row["Event Name"]}>
                        <TableCell align="center">
                          {row["Event Name"]}
                        </TableCell>
                        <TableCell align="center">
                          {row["start date"]}
                        </TableCell>
                        <TableCell align="center">{row["end date"]}</TableCell>
                        <TableCell align="center">{row.category}</TableCell>
                        <TableCell align="center">{row.location}</TableCell>
                        <TableCell align="center">
                          <ButtonGroup
                            size="small"
                            color="primary"
                            variant="outlined"
                          >
                            <Button onClick={this.openAlert.bind(this)}>
                              Detail
                            </Button>
                            <Button>Delete</Button>
                          </ButtonGroup>
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            className="pagination"
            component="div"
            count={this.state.talbes.length}
            rowsPerPageOptions={this.props.pageOptions}
            rowsPerPage={this.state.rowsPerPage}
            page={this.state.page}
            onPageChange={this.handleChangePage.bind(this)}
            onRowsPerPageChange={this.handleChangeRowsPerPage.bind(this)}
          />
        </Paper>
        <CustomAlert
          open={this.state.alertOpen}
          close={this.closeAlert.bind(this)}
        />
      </div>
    );
  }
}
function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

export default CustomTable;
