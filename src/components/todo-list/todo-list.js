import React from 'react';

import TodoListItem from '../todo-list-item';

const TodoList = ({ todos, onDelete, onToggleDone, onToggleImportant }) => {
  const displayTodo = todos.map((todo) => {
    const { action } = todo;
    return (
      <div key={action} className="">
        <TodoListItem
          {...todo}
          onDelete={() => onDelete(action)}
          onToggleDone={() => onToggleDone(action)}
          onToggleImportant={() => onToggleImportant(action)}
        />
      </div>
    );
  });

  return (
    <ul className="list-group list-group-flush text-light">{displayTodo}</ul>
  );
};

export default TodoList;
