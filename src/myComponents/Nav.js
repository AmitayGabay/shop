import React, { useContext, useEffect, useState } from "react";
import ShopContext from "../contexts/ShopContext";
import "./Nav.css";
const Nav = () => {
  const { products, setProducts, allProducts } = useContext(ShopContext)
  const [categoriesOption, setCategoriesOption] = useState([])

  useEffect(() => {
    if (allProducts.length > 0) {
      const categories = allProducts.map((item) => item.category).filter((value, index, array) => array.indexOf(value) === index);
      categories.unshift("all products")
      setCategoriesOption(categories)
    }

  }, [allProducts])

  const onChangeSelect = category => {
    if (category == "all products") {
      setProducts(allProducts)
    }
    else {
      const filterProducts = allProducts.filter(item => item.category == category);
      setProducts(filterProducts)
    }

  }
  return (
    <nav className="product-filter">
      <h1>Welcome to GABAY stor!</h1>

      <div className="sort">
        <div className="collection-sort">
          <label>Filter by:</label>
          <select
            onChange={e => onChangeSelect(e.target.value)}
          >
            {categoriesOption.map(item => <option value={item}>{item}</option>)}
          </select>
        </div>

        <div className="collection-sort">
          <label>Sort by:</label>
          <select>
            <option value="/">Featured</option>
            <option value="/">Best Selling</option>
            <option value="/">Alphabetically, A-Z</option>
            <option value="/">Alphabetically, Z-A</option>
            <option value="/">Price, low to high</option>
            <option value="/">Price, high to low</option>
            <option value="/">Date, new to old</option>
            <option value="/">Date, old to new</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
