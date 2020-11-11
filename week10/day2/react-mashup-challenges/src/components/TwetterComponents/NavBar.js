import React from 'react';
import { Link } from '@reach/router';

const NavBar = () => {
  return (
    <div>
      <Link to="/tweetter/">Home</Link>
      <Link to="/tweetter/new">Add Twoot</Link>
      <Link to="/tweetter/edit/testTwoot">Edit Twoot</Link>
      <Link to="/tweetter/testTwoot">Show Twoot</Link>


    </div>
  );
};

export default NavBar;
