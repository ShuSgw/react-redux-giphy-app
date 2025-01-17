import React from "react";
import {connect} from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const Header = props => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">{props.header.header}</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const ConnectedHeader = connect(s => ({header: s}))(Header);
export default ConnectedHeader;
