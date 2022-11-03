import { Button, Tab, Tabs } from '@mui/material';
import React from 'react';
import { BsFillHouseFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './Id.css';

const Id = ({ val }) => {
  let catStyle = "green";
  if (val.category == "men's clothing") {
    catStyle = "blue";
  }
  else if (val.category == "jewelery") {
    catStyle = "gold";
  }
  else if (val.category == "electronics") {
    catStyle = "gray";
  }
  else {
    catStyle = "purple";
  }
  return (
    <>
      <h1><span className="info_of_item">מידע נוסף עבור פריט {val.id}</span></h1>
      <div className="id_container">
        <div className="item-card">
          <div className="item-image" style={{
            backgroundImage: `url(${val.image})`,
            backgroundSize: "cover", backgroundPosition: "top center"
          }}>
            <div className="item-cat" style={{ background: catStyle }}>{val.category}</div>
          </div>
          <div className="item-info">
            <h3>{val.title}</h3>
          </div>
          <div className="item-price">
            <h4>{val.price} ש"ח</h4>
          </div>
          <h3>תיאור:</h3>
          <div className="item-description">
            <h4>{val.description}</h4>
          </div>
          <h3>דירוג:</h3>
          <div className="item-rating">
            <h4>כוכבים- {val.rating.rate}, מספר דירוגים- {val.rating.count}</h4>
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

export default Id;