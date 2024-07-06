import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import StartupTwo from "./components/StartupTwo";
import StartupThree from "./components/StartupThree";

const App = () => {
  return (
    <BrowserRouter
      className="font-sans"
      style={{
        fontFamily: ["DM Sans", "sans-serif"],
        backgroundColor: "#2F1893",
      }}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<StartupTwo />} />
        <Route path="/startupthree" element={<StartupThree/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
