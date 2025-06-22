import { useState } from "react";
import Navbar from "./components/Navbar";
import Details from "./components/Details";
import Images from "./components/images";
import "./index.css";

function App() {
  return (
    <div className="bg-white min-h-screen font-sans">
      <Navbar />
      <div className="p-6 grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <Images />
        <Details />
      </div>
    </div>
  );
}
export default App;
