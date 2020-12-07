import React, { Component } from 'react';

export default class AddItemPanel extends Component {
  initialState = {
    action: '',
  };

  state = this.initialState;

  handleChange = (event) => {
    this.setState({
      action: event.target.value,
    });
  };

  submitForm = (e) => {
    e.preventDefault();
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  };

  render() {
    return (
      <form className="form-group d-flex mt-3" onSubmit={this.submitForm}>
        <input
          type="text"
          placeholder="Type to Add"
          className="form-control mr-1"
          value={this.state.action}
          onChange={this.handleChange}
        />
        <button type="submit" className="btn btn-outline-secondary">
          Add
        </button>
      </form>
    );
  }
}
