import React, { useContext } from "react";
import { PRODUCTS } from "../../Product";
import { ShopContext } from "../../context/Shop-Context";
import { CartItem } from "./Cart-Item";
import "./cart.css";
import {useNavigate} from 'react-router-dom';

export const Cart = () => {
  const { cartItems,getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((Product)=>{
          if (cartItems[Product.id] !== 0) {
            return <CartItem data={Product} />;
          }
        })}
      </div>
      {totalAmount > 0 ?
      <div className="checkout">
       
        <p>Subtotal : ${totalAmount}</p>
        <button onClick={() =>navigate("/")}>Continue Shopping</button>
        <button>CheckOut</button>


      </div>
      : <h1>Your Cart is Empty</h1> }
    </div>
  );
};
