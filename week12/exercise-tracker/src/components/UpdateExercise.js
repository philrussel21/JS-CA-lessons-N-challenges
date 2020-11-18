import React, { useContext, useState } from 'react';
import { ExerciseContext } from '../contexts/ExerciseContext';
import { ACTIONS } from '../reducers/exerciseReducer';

const UpdateExercise = ({ exercise, setEdit }) => {
  const [name, setName] = useState(exercise.name);
  const [duration, setDuration] = useState(exercise.duration);
  const { dispatch } = useContext(ExerciseContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedExercise = {
      name, duration, id: exercise.id
    };
    dispatch({
      type: ACTIONS.UPDATE_EXERCISE,
      exercise: updatedExercise
    });
    setEdit(false);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input type="number"
        value={duration}
        onChange={e => setDuration(e.target.value)}
      />
      <input type="submit" value="Update Exercise" />
    </form>
  );
};

export default UpdateExercise;
