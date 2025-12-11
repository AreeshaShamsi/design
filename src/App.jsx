import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Learner from "./pages/LearnerSection";

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learner" element={<Learner />} />
       
      </Routes>
   
  );
}

export default App;
