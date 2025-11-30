import React, { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import { StudentContext } from "../context/StudentContext";

const StudentCard = ({ student }) => {
  const { deleteStudent } = useContext(StudentContext);

  return (
    <div className="bg-white shadow-md p-4 rounded-lg border">
      <h3 className="text-xl font-semibold">{student.name}</h3>
      <p className="text-gray-600">Dept: {student.department}</p>
      <p className="text-gray-600">Company: {student.company}</p>
      <p className="text-gray-600">Package: {student.package} LPA</p>

      <button
        className="mt-4 px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        onClick={() => deleteStudent(student.id)}
      >
        <FaTrash />
      </button>
    </div>
  );
};

export default StudentCard;
