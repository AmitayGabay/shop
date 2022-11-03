import { Button } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { BsCart4 } from "react-icons/bs";
import ShopContext from '../contexts/ShopContext';
import "./CartAtHome.css";

const CartAtHome = () => {
    const { allProducts } = useContext(ShopContext);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const cartProducts = allProducts?.filter(item => item.amount > 0);
        setCart(cartProducts);
    }, [])

    return (
        <>
            <div className='cartAtHome'>
                <h1 className="h1_cartAtHome"><span className="info_of_cartAtHome">העגלה שלי <BsCart4 size={30} /></span></h1>
                <div className="productsInCartAtHome">
                    {cart.map(item =>
                        <div className="product-card-in-cartAtHome">
                            <div className="product-image-in-cartAtHome" style={{
                                backgroundImage: `url(${item.image})`,
                                backgroundSize: "cover", backgroundPosition: "top center"
                            }}>
                            </div>
                            <div className='wrapper-info-in-cartAtHome'>
                                <div className="product-info-in-cartAtHome">
                                    <h3>{item.title}</h3>
                                </div>
                                <div className="product-price-and-amount-in-cartAtHome">
                                    <span>{item.price} ש"ח</span>
                                    <br></br>
                                    {item.amount > 0 && <span>כמות: {item.amount}</span>}
                                </div>
                                <div className='btnInCartAtHome'>
                                    <Button variant="outlined" color="error" onClick={() => {
                                        item.amount > 0 && (item.amount -= 1);
                                        const currentCartProducts = cart?.filter(item => item.amount > 0);
                                        setCart([...currentCartProducts]);
                                    }} >הסר <BsCart4 size={20}></BsCart4></Button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default CartAtHome;