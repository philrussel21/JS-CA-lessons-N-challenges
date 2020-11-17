import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = ({ children }) => {
  const [books, setBooks] = useState([
    { title: 'name of the wind', author: 'patrick rothfuss', id: 1 },
    { title: 'the final empire', author: 'brandon sanderson', id: 2 }
  ]);

  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: newId() }]);
  };

  const removeBook = (id) => {
    const allBooks = books.filter(book => book.id !== id);
    setBooks(allBooks);
  };

  const newId = (arr) => {
    return arr.length + 1;
  };
  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
