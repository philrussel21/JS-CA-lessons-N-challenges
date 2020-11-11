import React from 'react';
import { Link } from '@reach/router';

const Twoot = (props) => {
  if (!props.id) {
    const { category, joke, id } = props.getJokefromId(props.jokeId);
    return (
      <div>
        <Link to={`${id}`}>
          <h3>{category} #{id}</h3>
        </Link>
        <p>{joke}</p>
      </div>
    );
  }
  else {
    const { category, joke, id } = props.getJokefromId(props.id);
    return (
      <div>
        <Link to={`${id}`}>
          <h3>{category} #{id}</h3>
        </Link>
        <p>{joke}</p>
      </div>
    );
  }
};

export default Twoot;
