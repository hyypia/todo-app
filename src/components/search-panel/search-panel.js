import React, { Component } from 'react';

import ItemFilter from '../item-filter';

export default class SearchPanel extends Component {
  state = {
    text: '',
  };

  onChangeSearch = (e) => {
    const text = e.target.value;
    this.setState({ text: e.target.value });
    this.props.onChangeSearch(text);
  };

  render() {
    return (
      <div className="d-flex">
        <input
          type="text"
          placeholder="Type to Search"
          className="form-control mr-1"
          value={this.state.text}
          onChange={this.onChangeSearch}
        />
        <ItemFilter
          filter={this.props.filter}
          onChangeFilter={this.props.onChangeFilter}
        />
      </div>
    );
  }
}
