import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from "./pages/Home";
import AddResume from "./pages/AddResume";
import View from "./pages/View";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/add-resume" element={<AddResume />} />
        <Route path="/view-resume" element={<View />} />
      </Routes>
    </Router>
  );
}

export default App;