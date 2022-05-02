
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import GetMovie from "./GetMovie";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="main" element={<GetMovie />} />
      </Routes>
    </div>
  );
}
export default App;