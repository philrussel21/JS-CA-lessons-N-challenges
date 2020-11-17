const newId = (arr) => {
  return arr.length + 1;
};

export const bookReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [...state, {
        title: action.book.title,
        author: action.book.author,
        id: newId(state)
      }];
    case 'REMOVE_BOOK':
      const allRemainingBooks = state.filter(book => book.id !== action.id);
      return allRemainingBooks;
    default:
      return state;
  }
};
