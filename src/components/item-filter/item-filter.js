import React, { Component } from 'react';
import classNames from 'classnames';

export default class ItemFilter extends Component {
  buttons = [
    { name: 'active', title: 'Active' },
    { name: 'done', title: 'Done' },
  ];

  render() {
    const { filter, onChangeFilter } = this.props;
    const buttons = this.buttons.map(({ name, title }) => {
      const isActive = name === filter;
      return (
        <button
          key={name}
          type="button"
          className={classNames('btn', {
            'btn-secondary': isActive,
            'btn-outline-secondary': !isActive,
          })}
          onClick={() => onChangeFilter(name)}
        >
          {title}
        </button>
      );
    });

    return <div className="btn-group">{buttons}</div>;
  }
}
