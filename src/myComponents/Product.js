import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ShopContext from '../contexts/ShopContext';
import { BsCart4 } from "react-icons/bs";
import "./Product.css";
import { Button } from '@mui/material';

const Product = ({ item }) => {
  item.price = item.price <= 100 ? item.price : (Number(Math.random() * 100)).toFixed();

  const { products, setProducts, allProducts, myUrl } = useContext(ShopContext);
  const addOne = () => {
    item.amount += 1;
    setProducts([...products]);
  }
  const reduceOne = () => {
    item.amount > 0 && (item.amount -= 1);
    setProducts([...products]);
  }
  let catStyle = "green";
  if (item.category == "men's clothing") {
    catStyle = "blue";
  }
  else if (item.category == "jewelery") {
    catStyle = "gold";
  }
  else if (item.category == "electronics") {
    catStyle = "gray";
  }
  else {
    catStyle = "purple";
  }

  return (
    <div className="product-card">
      <div className="product-image" style={{
        backgroundImage: `url(${item.image})`,
        backgroundSize: "cover", backgroundPosition: "top center"
      }}>
        <div className="product-cat" style={{ background: catStyle }}>{item.category}</div>
      </div>
      <div className="product-info">
        <h3>{item.title}</h3>
      </div>
      <div className="product-price">
        <h4>{item.price} ש"ח</h4>
      </div>
      <div className="cart-btns-container">
        <div className='firstBtn'>
          <Button variant="outlined" color="success" onClick={addOne}>הוסף לעגלה <BsCart4 size={20}></BsCart4></Button>
        </div>
        <div className='amount'>
          {item.amount > 0 && <span>{item.amount}</span>}
        </div>
        <div className='secondBtn'>
          <Button variant="outlined" color="error" onClick={reduceOne}>הסר מהעגלה<BsCart4 size={20}></BsCart4></Button>
        </div>
      </div>
      <button className="open-cart">
        <Link style={{ textDecoration: "none", color: "black" }} to={"/cartathome"}>
          לפתיחת העגלה
        </Link>
      </button>
      <button className="more-info">
        <Link style={{ textDecoration: "none", color: "black" }} to={`product/${item.id}`}>
          לפרטים נוספים
        </Link>
        {/* <Link style={{textDecoration: "none", color: "black"}} to={`test/${item.id}`}>  
      לפרטים נוספים
      </Link> */}
      </button>
    </div>
  )
}

export default Product