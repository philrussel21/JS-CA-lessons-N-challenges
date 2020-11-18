import React from 'react';
import RemoveExercise from './RemoveExercise';

const ExerciseDetails = ({ exercise }) => {
  return (
    <div>
      <h3>TODO: {exercise.name}</h3>
      <h4>Duration: {exercise.duration} minutes</h4>
      <RemoveExercise id={exercise.id} />
    </div>
  );
};

export default ExerciseDetails;
