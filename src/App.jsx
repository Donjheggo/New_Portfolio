import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Works from "./pages/Works";
import CV from "./pages/CV";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/cv" element={<CV />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
