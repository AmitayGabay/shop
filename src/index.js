import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Routing from "./myComponents/Routing";
import ShopContext from "./ShopContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ShopContext.Provider>
    <Routing />
  </ShopContext.Provider>
);
