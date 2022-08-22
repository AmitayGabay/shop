import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import App from "../App";
import Cart from "./Cart";

const Routing = () => {
  return (
    <Router>
      {/* <Link to="/">home</Link>
      <Link to={"/cart"}>Cart</Link> */}
      <Routes>
        {/* <Route index element={<App />} /> */}
        {/* <Route path="/cart" element={<Cart />} /> */}
      </Routes>
    </Router>
  );
};

export default Routing;
