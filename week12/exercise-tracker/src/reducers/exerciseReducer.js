export const ACTIONS = {
  CREATE_EXERCISE: 'addExercise',
  REMOVE_EXERCISE: 'removeExercise',
  UPDATE_EXERCISE: 'updateExercise'
};

const newId = (arr) => {
  return arr.length + 1;
};

export const exerciseReducer = (state, action) => {
  // expecting an exercise object inside action as the new exercise
  switch (action.type) {
    case ACTIONS.CREATE_EXERCISE: {
      return [...state, {
        name: action.exercise.name,
        duration: action.exercise.duration,
        id: newId(state)
      }];
    }
    // expecting an id passed as action.id to be removed from state
    case ACTIONS.REMOVE_EXERCISE: {
      const allOtherExercises = state.filter(exercise => exercise.id !== action.id);
      return allOtherExercises;
    }
    // expecting an exercise object inside action
    case ACTIONS.UPDATE_EXERCISE: {
      const allOtherExercises = state.filter(exercise => exercise.id !== action.exercise.id);
      return [...allOtherExercises, action.exercise];
    }
    default: {
      return state;
    }
  }
};