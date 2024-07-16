import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import StartupTwo from "./components/StartupTwo";
import StartupThree from "./components/StartupThree";
import UseState from "./components/UseState";
import UseRef from "./components/UseRef";
import { WeatherProvider } from "./components/context/WeatherContext";

const App = () => {
  return (
    <BrowserRouter
      className="font-sans"
      style={{
        fontFamily: ["DM Sans", "sans-serif"],
        backgroundColor: "#2F1893",
      }}
    >
      <WeatherProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<StartupTwo />} />
        <Route path="/features" element={<UseState />} />
        <Route path="/subscribe" element={<UseRef />} />
        <Route path="/startupthree" element={<StartupThree/>} />
      </Routes>
      </WeatherProvider>
    </BrowserRouter>
  );
};

export default App;
