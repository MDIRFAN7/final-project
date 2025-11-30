import React, { createContext, useState } from "react";

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, { id: Date.now(), ...student }]);
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  return (
    <StudentContext.Provider value={{ students, addStudent, deleteStudent }}>
      {children}
    </StudentContext.Provider>
  );
};
