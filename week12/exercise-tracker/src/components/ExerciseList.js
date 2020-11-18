import React, { useContext } from 'react';
import { ExerciseContext } from '../contexts/ExerciseContext';
import ExerciseDetails from './ExerciseDetails';

const ExerciseList = () => {
  const { exercises } = useContext(ExerciseContext);
  return (
    <div>
      {exercises
        ? (exercises.map(exercise => <ExerciseDetails exercise={exercise} />))
        : (<h2>No exercises yet.</h2>)}
    </div>
  );
};

export default ExerciseList;
