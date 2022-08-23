import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Nav from "./Nav";


const Routing = () => {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/*" element={<h1>404 not found</h1>}/>
        <Route/>
      </Routes>
    </Router>
  );
};

export default Routing;
