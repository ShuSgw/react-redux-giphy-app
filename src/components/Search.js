import React from "react";
import {connect} from "react-redux";
import getUrls from "../actions/getUrls";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: ""};
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="form">
          <TextField
            className="textfield"
            onChange={this.handleChange}
            value={this.state.title}
            type="text"
          />
          <Button
            className="button"
            type="submit"
            variant="contained"
            color="primary"
          >
            {this.props.seach.waitingText}
          </Button>
        </form>
      </div>
    );
  }
  handleChange = event => {
    const title = event.target.value;
    this.setState({title: title});
  };
  handleSubmit = event => {
    event.preventDefault();
    alert(this.state.title);
    this.props.dispatch(getUrls(this.state.title));
    this.setState({title: ""});
  };
}

const ConnectedSearch = connect(s => ({seach: s}))(Search);
export default ConnectedSearch;
