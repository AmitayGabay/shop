import React, { useContext, useEffect, useState } from 'react';
import Product from './Product';
import "./Home.css";
import Loader from './Loader';
import "./Loader.css";
import ShopContext from '../contexts/ShopContext';
import Nav from './Nav';

const Home = () => {
  const { products, setIsHome, isLoading} = useContext(ShopContext);
  useEffect(() => {
    setIsHome(true);
  }, [])
  
  return (
    <>
      <Nav />
        {isLoading && <Loader />}
        {!isLoading && products.length === 0 && <h1 className='no_products'><span>אין מוצרים</span></h1>}
      <div className="main-container">
        <section className="products">
          {
            products.map((item) => <Product item={item} />)
          }
        </section>
      </div>
    </>
  )
}

export default Home;

