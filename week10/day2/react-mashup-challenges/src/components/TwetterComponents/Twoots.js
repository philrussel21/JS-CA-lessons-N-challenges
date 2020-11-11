import React from 'react';
import Twoot from './Twoot';

const Twoots = ({ allJokes, getJokefromId }) => {
  if (!allJokes) {
    return (
      <h1>No jokes yet.</h1>
    );
  } else {

    return (
      <div>
        <h2>All Twoots</h2>
        {
          allJokes.map(j => (
            <Twoot jokeId={j.id} key={j.id} getJokefromId={getJokefromId} />

          ))
        }

      </div>
    );
  }
};

export default Twoots;
