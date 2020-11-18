import React, { createContext, useReducer } from 'react';
import { exerciseReducer } from '../reducers/exerciseReducer';

export const ExerciseContext = createContext();

const ExerciseContextProvider = ({ children }) => {
  const initialState = [
    { name: "Jogging", duration: 45 }
  ];
  const [exercises, dispatch] = useReducer(exerciseReducer, initialState);
  return (
    <ExerciseContext.Provider value={{ exercises, dispatch }}>
      {children}
    </ExerciseContext.Provider>
  );
};

export default ExerciseContextProvider;
