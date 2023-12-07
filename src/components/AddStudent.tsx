"use client";
import React, { useState } from "react";
import axios from "axios";

interface Student {
  id: number;
  name: string;
  fiction_score: number;
  non_fiction_score: number;
}

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
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>Student Name:</label>
        <input
          type="text"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
        />
        <label>Fiction Score:</label>
        <input
          type="number"
          value={fictionScore}
          onChange={(e) => setFictionScore(Number(e.target.value))}
        />

        <label>Non-Fiction Score:</label>
        <input
          type="number"
          value={nonFictionScore}
          onChange={(e) => setNonFictionScore(Number(e.target.value))}
        />

        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default AddStudent;
