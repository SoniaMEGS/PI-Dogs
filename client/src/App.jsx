import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { DogDetails, Form, Landing, Home } from "./pages/index.js";
import NavBar from "./components/NavBar.jsx";
import "./App.css";

function App() {
  const { pathname } = useLocation();

  return (
    <div className="app">
      {pathname !== "/" && <NavBar />}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:name" element={<DogDetails />} />
        <Route path="/form" element={<Form />} />
        <Route index element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
