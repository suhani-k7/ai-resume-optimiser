import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white px-8 py-4 shadow-sm flex items-center justify-between sticky top-0 z-50">
      <h1 className="text-xl font-bold text-gray-100">
        AI Resume Optimiser
      </h1>
      <nav className="flex space-x-6">
        <Link
          to="/home"
          className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
        >
          Home
        </Link>
        <Link
          to="/add-resume"
          className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
        >
          Add Resume
        </Link>
        <Link
          to="/view-resume"
          className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
        >
          View Resume
        </Link>
      </nav>
    </header>
  );
};

export default Header;
