import React, { Component } from 'react';
import TextField from "@material-ui/core/TextField/TextField";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

class PasswordField extends Component {
    constructor(props){
        super(props);
        this.state = {
            visibility:false,
            inputType:"password"
        }
    }

    changeIcon(){
        this.setState({
            visibility:!this.state.visibility,
            inputType:this.state.inputType === "password" ? "text" : "password"
        })
    }
    render() {
        return (
            <>
                  <TextField
                    label={this.props.label}
                    type={this.state.inputType}
                    {...this.props}
                    InputProps={{
                      endAdornment:
                        this.state.visibility === true ? (
                          <VisibilityIcon
                            onClick={this.changeIcon.bind(this)}
                            style={{ cursor: "pointer" }}
                          />
                        ) : (
                          <VisibilityOffIcon
                            onClick={this.changeIcon.bind(this)}
                            style={{ cursor: "pointer" }}
                          />
                        ),
                    }}
                  />
                
            </>
        );
    }
}

export default PasswordField;
