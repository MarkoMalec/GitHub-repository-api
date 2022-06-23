import React, { Component } from "react";
import PropTypes from 'prop-types';
import "./Form.scss";

class Form extends Component {
  state = {
    value: "",
  };

  handleInput = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  doSearch = (e) => {
    this.props.callback(this.state.value);
    e.preventDefault();
    console.log(this.state.value);
  };

  render() {
    return (
      <>
        <form id="form" onSubmit={this.doSearch}>
          <label htmlFor="username">Search GitHub usernames</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Type here..."
            value={this.state.value}
            onChange={this.handleInput}
          />
          <input id="submit" type="submit" value="Search" />
        </form>
      </>
    );
  }
}

Form.propTypes = {
  callback: PropTypes.func
};

export default Form;
