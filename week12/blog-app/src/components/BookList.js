import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import { ThemeContext } from '../contexts/ThemeContext';

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { books } = useContext(BookContext);
  const theme = isLightTheme ? light : dark;

  const bookList = books.map(book => (
    <li style={{ background: theme.ui }} key={book.id}>{book.title}</li>
  ));
  return (
    <div className="book-list" style={{ color: theme.syntax, background: theme.bg }}>
      <ul>
        {bookList}
      </ul>
    </div>
  );
};

export default BookList;
