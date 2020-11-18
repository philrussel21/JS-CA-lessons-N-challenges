import React, { useState } from 'react';
import RemoveExercise from './RemoveExercise';
import UpdateExercise from './UpdateExercise';

const ExerciseDetails = ({ exercise }) => {
  const [isEdit, setEdit] = useState(false);

  const handleClick = () => {
    setEdit(true);
  };
  return isEdit
    ? (
      <UpdateExercise exercise={exercise} setEdit={setEdit} />
    )
    : (
      <div>
        <h3>TODO: {exercise.name}</h3>
        <h4>Duration: {exercise.duration} minutes</h4>
        <button onClick={handleClick}>Edit Exercise</button>
        <RemoveExercise id={exercise.id} />
      </div>
    );
};

export default ExerciseDetails;
