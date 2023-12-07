"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

interface Student {
  id: number;
  name: string;
  fiction_score: number;
  non_fiction_score: number;
}

const ShowStudent: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/students");
        setStudents(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-md mx-auto mt-8">
      {students.length > 0 ? (
        <div className="space-y-4">
          {students.map((student) => (
            <div key={student.id} className="bg-white p-4 rounded-md shadow-md">
              <h3 className="text-lg font-semibold mb-2">{student.name}</h3>
              <p className="mb-2">Fiction Score: {student.fiction_score}</p>
              <p>Non-Fiction Score: {student.non_fiction_score}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">No students available</p>
      )}
    </div>
  );
};

export default ShowStudent;
