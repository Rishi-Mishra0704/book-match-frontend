"use client";
import React, { useState } from "react";
import axios from "axios";

import { useRouter } from "next/navigation";

const AddStudent: React.FC = () => {
  const [studentName, setStudentName] = useState<string>("");
  const [fictionScore, setFictionScore] = useState<number>(0);
  const [nonFictionScore, setNonFictionScore] = useState<number>(0);

  const router = useRouter();

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Check if the student exists by making a GET request
      const studentCheckResponse = await axios.get(
        "https://book-match-backend-rishi-mishra0704.vercel.app/api/students/"
      );
      const existingStudent = studentCheckResponse.data.find(
        (student: any) => student.name === studentName
      );

      if (existingStudent) {
        // If the student exists, save the data in local storage
        const localData = {
          student_id: existingStudent.id,
          fiction_score: fictionScore,
          non_fiction_score: nonFictionScore,
        };

        // Save data in local storage (this depends on your specific implementation)
        localStorage.setItem("student_data", JSON.stringify(localData));
      } else {
        // If the student is not found, create a new student using the provided endpoint
        const createStudentResponse = await axios.post(
          "https://book-match-backend-rishi-mishra0704.vercel.app/api/student/create/",
          {
            name: studentName,
            fiction_score: fictionScore,
            non_fiction_score: nonFictionScore,
          }
        );

        // Extract the created student's ID from the response
        const newStudentId = createStudentResponse.data.id;

        // Save the data in local storage for the newly created student
        const localData = {
          student_id: newStudentId,
          fiction_score: fictionScore,
          non_fiction_score: nonFictionScore,
        };

        // Save data in local storage (this depends on your specific implementation)
        localStorage.setItem("student_data", JSON.stringify(localData));
      }
    } catch (error) {
      console.error("Error:", error);
    }
    router.push("/books");
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
