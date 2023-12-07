"use client";
import React, { useState } from 'react';
import FetchBook from '@/components/FetchBook';
import ShowBooks from '@/components/ShowBooks';

interface Book {
  id: number;
  title: string;
  author: string;
  fiction_score: number;
  non_fiction_score: number;
}

const BookPage: React.FC = () => {
  const [matchingBooks, setMatchingBooks] = useState<Book[]>([]);

  const handleFetchBooks = (books: Book[]) => {
    setMatchingBooks(books);
  };

  return (
    <div className="container mx-auto p-8">
    <h1 className="text-3xl font-bold mb-6">Book Matching Page</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-xl font-semibold mb-4">Get the book you wish</h2>
        <FetchBook onFetchBooks={handleFetchBooks} />
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-4">Matching Books</h2>
        <ShowBooks books={matchingBooks} />
      </div>
    </div>
  </div>
  );
};

export default BookPage;
