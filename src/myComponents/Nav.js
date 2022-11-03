import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ShopContext from "../contexts/ShopContext";
import { BsCart4, BsFillHouseFill } from "react-icons/bs";
import "./Nav.css";
import { Tabs, Tab, Slider, Box, Button, InputLabel, MenuItem, FormControl, Select } from "@mui/material";

const Nav = () => {
  const { products, setProducts, allProducts, isHome } = useContext(ShopContext);
  const [categoriesOption, setCategoriesOption] = useState([]);
  const [typeOfProducts, setTypeOfProducts] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("all products");
  const minPrice = 0;
  const maxPrice = 100;
  const [value, setValue] = useState([minPrice, maxPrice]);

  useEffect(() => {
    if (allProducts.length > 0) {
      const categories = allProducts.map((item) => item.category).filter((value, index, array) => array.indexOf(value) === index);
      categories.unshift("all products")
      setCategoriesOption(categories)
    }
  }, [allProducts]);

  const onChangeSelect = category => {
    setCurrentCategory(category);
    console.log(value);
    if (category == "all products") {
      setProducts(allProducts);
      setTypeOfProducts(allProducts);
    }
    else {
      const filterProducts = allProducts.filter(item => item.category == category);
      setProducts(filterProducts);
      setTypeOfProducts(filterProducts);
    }
  }

  useEffect(() => {
    let sortProducts = [];
    if (typeOfProducts.length == 0) {
      sortProducts = allProducts.filter(item => (item.price >= value[0] && item.price <= value[1]));
      setProducts(sortProducts);
    }
    else {
      sortProducts = typeOfProducts.filter(item => (item.price >= value[0] && item.price <= value[1]));
      setProducts(sortProducts);
    }
  }, [value, currentCategory])


  return (
    <nav>
      <h1>בוביס😍 - חנות יד 2</h1>
      <div className="wrapperNav">
        {isHome &&
        <>
          <div className="productsfilter">

            <div>
              <Tabs>
                <Tab label="בחר קטגוריה:" />
              </Tabs>
            </div>

            <div>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">type of products</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={currentCategory}
                    label="type of products"
                    onChange={e => onChangeSelect(e.target.value)}
                  >
                    {categoriesOption.map(item => <MenuItem value={item}>{item}</MenuItem>)}
                  </Select>
                </FormControl>
              </Box>
            </div>

          </div>

          <div className="productsSort">
            <Tabs>
              <Tab className="sortByPrice" label="מיין לפי מחיר:" />
            </Tabs>
          </div>

          <div className="rangeSlider">
            <Box sx={{ width: 200 }}>
              <Slider
                getAriaLabel={() => 'Temperature range'}
                value={value}
                onChange={(e, newValue) => { setValue(newValue); }}
                valueLabelDisplay="auto"
                getAriaValueText={(value) => `${value}`}
              />
            </Box>
          </div>
          </>
        }
        <div className="moveToTheCart">
          <Tabs>
            {isHome && <Tab label="למעבר לעגלה לחץ כאן" />}
            {!isHome && <Tab label="למעבר לדף הבית לחץ כאן" />}
            {isHome && <Button variant="outlined" color="success"><Link to={"/cart"}><BsCart4 size={30}></BsCart4></Link></Button>}
            {!isHome && <Button variant="outlined" color="success"><Link to={"/"} ><BsFillHouseFill size={30}></BsFillHouseFill></Link></Button>}
          </Tabs>
        </div>
      </div>
    </nav>
  )
};

export default Nav;
