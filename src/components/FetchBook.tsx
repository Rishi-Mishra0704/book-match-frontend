"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

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

const FetchBook: React.FC<FetchBookProps> = ({ onFetchBooks }) => {
  const [fictionScore, setFictionScore] = useState<number>(0);
  const [nonFictionScore, setNonFictionScore] = useState<number>(0);

  useEffect(() => {
    // Fetch student_id from local storage
    const storedData = localStorage.getItem("student_data");
    const parsedData = storedData ? JSON.parse(storedData) : null;

    if (parsedData && parsedData.student_id) {
      // Set initial values if student_id is found
      setFictionScore(parsedData.fiction_score);
      setNonFictionScore(parsedData.non_fiction_score);
    }
  }, []);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Fetch student_id from local storage
      const storedData = localStorage.getItem("student_data");
      const parsedData = storedData ? JSON.parse(storedData) : null;

      const response = await axios.post(
        "https://book-match-backend-rishi-mishra0704.vercel.app/api/student/matching_books/",
        {
          student_id: parsedData ? parsedData.student_id : null,
          fiction_score: fictionScore,
          non_fiction_score: nonFictionScore,
        }
      );

      onFetchBooks(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <form onSubmit={handleFormSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Fiction Score:
          </label>
          <input
            type="number"
            placeholder="Enter Fiction Score"
            onChange={(e) => setFictionScore(Number(e.target.value))}
            className="mt-1 p-2 block w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Non-Fiction Score:
          </label>
          <input
            type="number"
            placeholder="Enter Non-Fiction Score"
            onChange={(e) => setNonFictionScore(Number(e.target.value))}
            className="mt-1 p-2 block w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Fetch Books
        </button>
      </form>
    </div>
  );
};

export default FetchBook;
