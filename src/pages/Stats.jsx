import React, { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

const Stats = () => {
  const { students } = useContext(StudentContext);

  const totalStudents = students.length;
  const avgPackage =
    totalStudents === 0
      ? 0
      : (
          students.reduce((acc, s) => acc + Number(s.package), 0) /
          totalStudents
        ).toFixed(2);

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg max-w-xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">📊 Statistics</h2>

      <p className="text-xl text-gray-700">Total Students: {totalStudents}</p>
      <p className="text-xl text-gray-700">Average Package: {avgPackage} LPA</p>
    </div>
  );
};

export default Stats;
