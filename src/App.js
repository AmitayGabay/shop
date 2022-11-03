import React, { useState, useEffect } from "react";
import "./App.css";

import ShopContext from "./contexts/ShopContext";
import Routing from "./myComponents/Routing"
function App() {
  const [myUrl, setMyUrl] = useState("https://fakestoreapi.com/products");
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [isHome, setIsHome] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  
  return (
    <ShopContext.Provider value={{ products, setProducts, allProducts, setAllProducts, isHome, setIsHome, isLoading, setIsLoading, myUrl, setMyUrl }}>
      <Routing />
    </ShopContext.Provider>

  );
}

export default App;
