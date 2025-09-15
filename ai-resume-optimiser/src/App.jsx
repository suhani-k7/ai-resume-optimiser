import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Header from './components/Header';
import Home from "./pages/Home";
import AddResume from "./pages/AddResume";
import View from "./pages/View";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/add-resume" element={<AddResume />} />
        <Route path="/view-resume" element={<View />} />
      </Routes>
    </Router>
  );
}

export default App;