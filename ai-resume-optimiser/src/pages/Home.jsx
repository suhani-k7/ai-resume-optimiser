import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to AI Resume Optimiser</h1>
      <p>Your AI-powered resume optimisation tool!</p>
      <div className="home-buttons">
        <Link to="/view-resume">
          <button>View Existing Resumes</button>
        </Link>
        <Link to="/add-resume">
          <button>Create new Resume</button>
        </Link>
      </div>
    </div>
  );
}
export default Home;