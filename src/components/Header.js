import React from "react";
import {connect} from "react-redux";

const Header = props => {
  return (
    <div>
      <h1>{props.header.header}</h1>
    </div>
  );
};

const ConnectedHeader = connect(s => ({header: s}))(Header);
export default ConnectedHeader;
