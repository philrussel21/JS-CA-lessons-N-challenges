import React from 'react';
import ExerciseList from './components/ExerciseList';
import Navbar from './components/Navbar';
import ExerciseContextProvider from './contexts/ExerciseContext';

const App = () => {
  return (
    <ExerciseContextProvider>
      <Navbar />
      <ExerciseList />
    </ExerciseContextProvider>
  );
};

export default App;
