import React, { useContext } from "react";
import { StudentContext } from "../context/StudentContext";
import StudentCard from "../components/StudentCard";

const ViewStudents = () => {
  const { students } = useContext(StudentContext);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">All Students</h1>

      {students.length === 0 ? (
        <p className="text-gray-600">No students added yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {students.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ViewStudents;
