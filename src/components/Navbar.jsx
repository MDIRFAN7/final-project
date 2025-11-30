import React from "react";
import { Link } from "react-router-dom";
import { FaUserGraduate, FaPlusCircle, FaListUl, FaChartPie } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between shadow-md">
      <h1 className="text-2xl font-bold flex items-center gap-2">
        <FaUserGraduate /> Placement Tracker
      </h1>

      <ul className="flex gap-6 text-lg">
        <li><Link className="hover:text-yellow-300" to="/">Home</Link></li>
        <li><Link className="hover:text-yellow-300" to="/add">Add Student</Link></li>
        <li><Link className="hover:text-yellow-300" to="/view">View Students</Link></li>
        <li><Link className="hover:text-yellow-300" to="/stats">Stats</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
