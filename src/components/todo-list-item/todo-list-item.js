import React from 'react';
import classNames from 'classnames';

import './todo-list-item.css';

const TodoListItem = ({
  action,
  onDelete,
  onToggleDone,
  onToggleImportant,
  important,
  done,
}) => {
  return (
    <div
      className={classNames(
        'd-flex text-align-center justify-content-between mt-3',
        { 'text-warning font-weight-bold': important },
        { 'text-success done': done }
      )}
    >
      <span>{action}</span>
      <div className="d-flex">
        <button
          type="button"
          className="btn btn-outline-warning btn-sm rounded-circle mr-2"
          onClick={onToggleImportant}
        >
          <i className="fa fa-warning" />
        </button>
        <button
          className="btn btn-outline-danger btn-sm mr-2"
          onClick={onDelete}
        >
          <i className="fa fa-trash" />
        </button>
        <button
          className="btn btn-outline-success btn-sm rounded-circle"
          onClick={onToggleDone}
        >
          <i className="fa fa-check" />
        </button>
      </div>
    </div>
  );
};

export default TodoListItem;
