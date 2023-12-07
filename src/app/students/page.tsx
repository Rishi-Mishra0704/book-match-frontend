import AddStudent from "@/components/AddStudent";
import ShowStudent from "@/components/ShowStudent";
import React from "react";

const StudentPage = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Student Management Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Add Student</h2>
          <AddStudent />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Student List</h2>
          <ShowStudent />
        </div>
      </div>
    </div>
  );
};

export default StudentPage;
