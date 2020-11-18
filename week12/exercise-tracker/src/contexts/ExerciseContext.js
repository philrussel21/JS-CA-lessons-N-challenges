import React, { createContext, useReducer } from 'react';
import { exerciseReducer } from '../reducers/exerciseReducer';

export const ExerciseContext = createContext();

const ExerciseContextProvider = ({ children }) => {
  const [exercises, dispatch] = useReducer(exerciseReducer, []);
  return (
    <ExerciseContext.Provider value={{ exercises, dispatch }}>
      {children}
    </ExerciseContext.Provider>
  );
};

export default ExerciseContextProvider;
