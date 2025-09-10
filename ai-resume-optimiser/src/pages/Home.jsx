import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-md p-8 text-center border border-gray-100">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">
          Welcome to AI Resume Optimiser
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Your AI-powered resume optimisation tool!
        </p>

        <div className="flex gap-4 justify-center">
          <Link to="/view-resume">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium shadow 
              hover:bg-blue-700 transition-transform transform hover:scale-103 cursor-pointer">
              View Existing Resumes
            </button>
          </Link>
          <Link to="/add-resume">
            <button className="px-6 py-3 bg-white border border-blue-300 text-blue-600 rounded-lg font-medium shadow 
              hover:bg-blue-50 transition-transform transform hover:scale-103 cursor-pointer">
              Create New Resume
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
