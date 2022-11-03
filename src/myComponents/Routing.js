import React from "react";
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import ShopContext from "../contexts/ShopContext";
import Home from "./Home";
import Cart from "./Cart";
import Id from "./Id";
import Test from "./Test";
import CartAtHome from "./CartAtHome";

const Routing = () => {
  const { allProducts, setAllProducts, products, setProducts, myUrl, isLoading, setIsLoading } = useContext(ShopContext);
  const [routes, setRoutes] = useState([]);
  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async () => {
    let { data } = await axios.get(myUrl);
    data.forEach(item => item.amount = 0);
    setAllProducts(data);
    setProducts(data);
    setIsLoading(false);
  }
  useEffect(() => {
    const loopForRoutes = allProducts.map(item => <Route path={`/product/${item.id}`} element={<Id val={item}/>} />)
    setRoutes(loopForRoutes);
  }, [allProducts])
  
  return (
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cartathome" element={<CartAtHome />} />
          {routes.length > 0 && (routes)}
          {/* <Route path="/test/:productId" element={<Test/>} /> */}
          <Route path="/*" element={<h1>404 not found</h1>} />
          <Route />
        </Routes>
      </Router>
  );
};

export default Routing;
