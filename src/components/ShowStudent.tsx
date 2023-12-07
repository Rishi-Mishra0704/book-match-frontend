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
            const response = await axios.get(
              "http://127.0.0.1:8000/api/students"
            );
            setStudents(response.data);
          } catch (error) {
            console.error("Error:", error);
          }
        };
    
        fetchData();
      }, []); 

  return (
    <div>
      {students.length > 0 && (
        <>
          {students.map((student) => (
            <div key={student.id}>
              <h3>{student.name}</h3>
              <p>Fiction Score: {student.fiction_score}</p>
              <p>Non-Fiction Score: {student.non_fiction_score}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default ShowStudent;
