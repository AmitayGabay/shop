import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { ReactDOM } from 'react';
import Product from './Product';
import "./Products.css";
import "../App.css";
import Loader from './Loader';
import ShopContext from '../contexts/ShopContext';
const Home = () => {
  const {products,setProducts,setAllProducts} = useContext(ShopContext)
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    getProducts()
  }, [])
  const getProducts = async () => {
    let { data } = await axios.get("https://fakestoreapi.com/products")
    setProducts(data);
    setAllProducts(data);
    setIsLoading(false)
  }
  return (
    <div className="main-container">
      {isLoading && <Loader />}
      {!isLoading&&products.length===0&&<h1>אין מוצרים</h1>}
      <section className="products">
        {
          products.map(item => <Product item={item} />)
        }
      </section>
    </div>
  )
}

export default Home;

