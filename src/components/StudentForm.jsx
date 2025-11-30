import React, { useState, useContext } from "react";
import { StudentContext } from "../context/StudentContext";

const StudentForm = () => {
  const { addStudent } = useContext(StudentContext);

  const [formData, setFormData] = useState({
    name: "",
    department: "",
    company: "",
    package: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent(formData);
    setFormData({ name: "", department: "", company: "", package: "" });
    alert("Student Added Successfully!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-lg max-w-lg mx-auto"
    >
      <h2 className="text-2xl font-bold mb-4">Add New Student</h2>

      <input
        type="text"
        name="name"
        placeholder="Student Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-3"
        required
      />

      <input
        type="text"
        name="department"
        placeholder="Department"
        value={formData.department}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-3"
        required
      />

      <input
        type="text"
        name="company"
        placeholder="Company Placed"
        value={formData.company}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-3"
        required
      />

      <input
        type="number"
        name="package"
        placeholder="Package (LPA)"
        value={formData.package}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-4"
        required
      />

      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full">
        Submit
      </button>
    </form>
  );
};

export default StudentForm;
