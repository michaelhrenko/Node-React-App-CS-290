import React from 'react';
import { Link } from 'react-router-dom';

// We don't need a nav link to edit-exercise since it's already in the table.
function Navigation() {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="../add-exercise">Add Exercise</Link>
    </nav>
  );
}

export default Navigation;
