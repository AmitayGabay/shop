import React, { useState, useEffect } from "react";
import Product from "./Product";
import Loader from "./Loader";
import "./Products.css";

const Products = ({ products, productsInCart }) => {
  // console.log(productsArr);

  return (
    <>
      {/* {productComponnents.length === 0 && <Loader />} */}
      <section className="products">
        {products.map(item => {
          return(<Product key={item.id} productInfo={item} productsInCart={productsInCart}/>);
        })}
      </section>
    </>
  );
};

export default Products;
