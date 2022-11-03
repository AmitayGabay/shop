import { Button } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { BsCart4 } from "react-icons/bs"
import ShopContext from '../contexts/ShopContext'
import Nav from './Nav'
import "./Cart.css";

const Cart = () => {
    const { allProducts, setAllProducts, setIsHome } = useContext(ShopContext);
    setIsHome(false);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const cartProducts = allProducts?.filter(item => item.amount > 0);
        setCart(cartProducts);
    }, [])

    return (
        <>
            <Nav />
            <div className='mainInCart'>
                <h1 className="h1"><span className="info_of_cart">העגלה שלי <BsCart4 size={30} /></span></h1>
                <div className="productsInCart">
                    {cart.map(item =>
                        <div className="product-card-in-cart">
                            <div className="product-image-in-cart" style={{
                                backgroundImage: `url(${item.image})`,
                                backgroundSize: "cover", backgroundPosition: "top center"
                            }}>
                            </div>
                            <div className="product-info-in-cart">
                                <h3>{item.title}</h3>
                            </div>
                            <div className="product-price-in-cart">
                                <h4>{item.price} ש"ח</h4>
                            </div>
                            <div className="cart-btns-container-in-cart">
                                <div className="amountInCart">
                                    {item.amount > 0 && <span>כמות: {item.amount}</span>}
                                </div>
                                <div className='btnInCart'>
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

export default Cart;