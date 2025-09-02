import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import AddResume from "./pages/addResume";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-resume" element={<AddResume />} />
        <Route path="/view-resume" element={<View />} />
      </Routes>
    </Router>
  );
} 

export default App;