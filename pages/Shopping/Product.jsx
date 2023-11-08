import React, { useContext } from "react";
import { ShopContext } from "../../context/Shop-Context";

export const Product = (Props) => {
  const { id, ProductsName, Price, ProductImage } = Props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemsAmount = cartItems[id]
  return (
    <div className="product">
      <img src={ProductImage} />
      <div className="description">
        <p>
          <b>{ProductsName}</b>
        </p>
        <p>${Price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart{cartItemsAmount>0 && <>({cartItemsAmount})</>}
      </button>
    </div>
  );
};
