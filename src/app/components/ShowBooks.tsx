"use client";
import React from 'react';

interface Book {
  id: number;
  title: string;
  author: string;
  fiction_score: number;
  non_fiction_score: number;
}

interface ShowBooksProps {
  books: Book[];
}

const ShowBooks: React.FC<ShowBooksProps> = ({ books }) => {
  return (
    <div>
      {/* Display matchingBooks here */}
      {books.map((book) => (
        <div key={book.id}>
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <p>Fiction Score: {book.fiction_score}</p>
          <p>Non-Fiction Score: {book.non_fiction_score}</p>
        </div>
      ))}
    </div>
  );
};

export default ShowBooks;
