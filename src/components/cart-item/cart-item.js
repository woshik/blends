import React, { useContext } from "react";
import { PlusCircleIcon, MinusCircleIcon } from "../icons";
import { CartContext } from "../../contexts/CartContext";
import ProductImage from "../../components/product-image";
import CartCount from "../../components/cart-count";
import styles from "./cart-item.module.css";

const CartItem = ({ product }) => {
  const { increase, decrease, removeProduct } = useContext(CartContext);
  const formattedPrice = product.price.toFixed(2).toString().replace(".00", "");
  const {
    CartItem,
    productContent,
    productImgWrap,
    productTitleContainer,
    productName,
    productType,
    productPrice,
    cartCountPosition,
    incrementContainer,
    removeButton,
  } = styles;

  return (
    <div className={CartItem}>
      <div className={productContent}>
        <div className={productImgWrap}>
          <ProductImage {...product} />
        </div>
        <div className={productTitleContainer}>
          <div className={productName}>
            {product.name}{" "}
            <div className={cartCountPosition}>
              <CartCount count={product.quantity} />
            </div>
          </div>
          <p className={productType}>
            {product.type}
            <span className={productPrice}>
              <small>$</small>
              {formattedPrice}
            </span>
          </p>
        </div>
      </div>
      <div className={incrementContainer}>
        <button onClick={() => increase(product)}>
          <PlusCircleIcon width={"20px"} />
        </button>

        {product.quantity > 1 && (
          <button onClick={() => decrease(product)}>
            <MinusCircleIcon width={"20px"} />
          </button>
        )}
      </div>

      {product.quantity === 1 && (
        <button className={removeButton} onClick={() => removeProduct(product)}>
          remove
        </button>
      )}
    </div>
  );
};

export default CartItem;
