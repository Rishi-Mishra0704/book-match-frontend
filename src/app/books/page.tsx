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
    <div>
      <FetchBook onFetchBooks={handleFetchBooks} />
      <ShowBooks books={matchingBooks} />
    </div>
  );
};

export default BookPage;
