"use client";
import React, { useState } from "react";
import axios from "axios";

const AddStudent: React.FC = () => {
  const [studentName, setStudentName] = useState<string>("");
  const [fictionScore, setFictionScore] = useState<number>(0);
  const [nonFictionScore, setNonFictionScore] = useState<number>(0);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/student/create/",
        {
          name: studentName,
          fiction_score: fictionScore,
          non_fiction_score: nonFictionScore,
        }
      );
      return response;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <form onSubmit={handleFormSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Student Name:
          </label>
          <input
            type="text"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            className="mt-1 p-2 block w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Fiction Score:
          </label>
          <input
            type="number"
            value={fictionScore}
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
            value={nonFictionScore}
            onChange={(e) => setNonFictionScore(Number(e.target.value))}
            className="mt-1 p-2 block w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Add Student
        </button>
      </form>
    </div>
  );
};

export default AddStudent;
