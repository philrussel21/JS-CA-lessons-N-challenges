import React, { useContext } from 'react';
import { ExerciseContext } from '../contexts/ExerciseContext';
import { ACTIONS } from '../reducers/exerciseReducer';

const RemoveExercise = ({ id }) => {
  const { dispatch } = useContext(ExerciseContext);
  const handleClick = () => {
    dispatch({
      type: ACTIONS.REMOVE_EXERCISE,
      id: id
    });
  };
  return (
    <button onClick={handleClick}>
      X
    </button>
  );
};

export default RemoveExercise;
