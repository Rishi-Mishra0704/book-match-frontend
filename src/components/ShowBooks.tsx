"use client";
import React from "react";

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
    <div className="max-w-md mx-auto mt-8">
      {books.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {books.map((book) => (
            <div key={book.id} className="bg-white p-4 rounded-md shadow-md">
              <h3 className="text-lg font-semibold mb-2">{book.title}</h3>
              <p className="text-gray-600 mb-2">{book.author}</p>
              <p className="mb-2">Fiction Score: {book.fiction_score}</p>
              <p>Non-Fiction Score: {book.non_fiction_score}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">No matching books found.</p>
      )}
    </div>
  );
};

export default ShowBooks;
