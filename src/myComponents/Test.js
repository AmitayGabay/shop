import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ShopContext from '../contexts/ShopContext';
import { Button, Tab, Tabs } from '@mui/material';
import { BsFillHouseFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './Id.css';

const Test = () => {
  const { myUrl } = useContext(ShopContext)

  const [oneProduct, setOneProduct] = useState({})
  const { productId } = useParams()

  useEffect(() => {
    getProductInfo()
  }, [])

  let catStyle = "green";

  const getProductInfo = async () => {
    let { data } = await axios.get(myUrl + "/" + productId)
    setOneProduct(data);
  
    if (oneProduct.category == "men's clothing") {
      catStyle = "blue";
    }
    else if (oneProduct.category == "jewelery") {
      catStyle = "gold";
    }
    else if (oneProduct.category == "electronics") {
      catStyle = "gray";
    }
    else {
      catStyle = "purple";
    }
  }

  return (
    <>
      <h1><span className="info_of_item">מידע נוסף עבור פריט {oneProduct.id}</span></h1>
      <div className="id_container">
        <div className="item-card">
          <div className="item-image" style={{
            backgroundImage: `url(${oneProduct.image})`,
            backgroundSize: "cover", backgroundPosition: "top center"
          }}>
            <div className="item-cat" style={{ background: catStyle }}>{oneProduct.category}</div>
          </div>
          <div className="item-info">
            <h3>{oneProduct.title}</h3>
          </div>
          <div className="item-price">
            <h4>{oneProduct.price} ש"ח</h4>
          </div>
          <h3>תיאור:</h3>
          <div className="item-description">
            <h4>{oneProduct.description}</h4>
          </div>
          <h3>דירוג:</h3>
          <div className="item-rating">
            {/* <h4>כוכבים- {oneProduct.rating.rate}, מספר דירוגים- {oneProduct.rating.count}</h4> */}
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ maxWidth: "200px" }}>
              <Tabs>
                <Tab label="לחזרה לדף הבית" />
                <Button variant="outlined" color="success"><Link to={"/"} ><BsFillHouseFill size={20} style={{ padding: 0, margin: 0 }}></BsFillHouseFill></Link></Button>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Test;