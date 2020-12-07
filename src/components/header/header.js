import React from 'react';

const Header = ({ todos, done }) => {
  return (
    <div className="header d-flex justify-content-between text-light">
      <h1>TODO</h1>
      <p className="d-flex align-items-end">
        {todos} todos, {done} done
      </p>
    </div>
  );
};

export default Header;
