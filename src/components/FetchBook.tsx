"use client";
import React, { useState } from 'react';
import axios from 'axios';
import ShowBooks from './ShowBooks';
import exp from 'constants';

interface Book {
  id: number;
  title: string;
  author: string;
  fiction_score: number;
  non_fiction_score: number;
}

interface FetchBookProps {
  onFetchBooks: (books: Book[]) => void;
}

const FetchBook: React.FC<FetchBookProps> = ({onFetchBooks}) => {
  const [fictionScore, setFictionScore] = useState<number>(0);
  const [nonFictionScore, setNonFictionScore] = useState<number>(0);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/student/matching_books/', {
        fiction_score: fictionScore,
        non_fiction_score: nonFictionScore,
      });

      onFetchBooks(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>Fiction Score:</label>
        <input type="number" value={fictionScore} onChange={(e) => setFictionScore(Number(e.target.value))} />

        <label>Non-Fiction Score:</label>
        <input type="number" value={nonFictionScore} onChange={(e) => setNonFictionScore(Number(e.target.value))} />

        <button type="submit">Fetch Books</button>
      </form>

    </div>
  );
};

export default FetchBook;
