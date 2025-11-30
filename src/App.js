import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddStudent from "./pages/AddStudent";
import ViewStudents from "./pages/ViewStudents";
import Stats from "./pages/Stats";
import { StudentProvider } from "./context/StudentContext";

const App = () => {
  return (
    <StudentProvider>
      <Router>
        <Navbar />
        <div className="p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddStudent />} />
            <Route path="/view" element={<ViewStudents />} />
            <Route path="/stats" element={<Stats />} />
          </Routes>
        </div>
      </Router>
    </StudentProvider>
  );
};

export default App;
