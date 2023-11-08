import React, { useContext } from "react";
import { ShopContext } from "../../context/Shop-Context";

export const CartItem = (props) => {
  const { id, ProductsName, Price, ProductImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={ProductImage} />
      <div className="description">
        <p>
          <b>{ProductsName}</b>
        </p>

        <p>${Price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}>-</button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}>+</button>
        </div>
      </div>
    </div>
  );
};
