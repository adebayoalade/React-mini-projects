import React from "react";
import Navbar from "./components/Navbar";
import StartupTwo from "./components/StartupTwo";

const App = () => {
  return (
    <div
      className="px-[35px] md:px-20 lg:px-28 py-10 md:py-16 lg:py-20 h-screen text-white font-sans"
      style={{
        fontFamily: ["DM Sans", "sans-serif"],
        backgroundColor: "#2F1893",
      }}
    >
      <Navbar />
      <StartupTwo/>
    </div>
  );
};

export default App;
