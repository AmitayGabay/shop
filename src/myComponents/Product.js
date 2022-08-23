import React from 'react';
import "./Product.css";

const Product = ({item}) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={item.image} />
      </div>
      <div className="product-info">
        <h5>{item.title}</h5>
        <h6>{item.price}</h6>
      </div>
      <div className="cart-btns-container">
        <button>
          +
        </button>
        {/* countInCart */}
        <span></span>
        <button>
          -
        </button>
      </div>
    </div>
  )
}

export default Product