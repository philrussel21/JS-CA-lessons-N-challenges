import React from 'react';

const ExerciseDetails = ({ exercise }) => {
  return (
    <div>
      <h3>TODO: {exercise.name}</h3>
      <h4>Duration: {exercise.duration} minutes</h4>
    </div>
  );
};

export default ExerciseDetails;
