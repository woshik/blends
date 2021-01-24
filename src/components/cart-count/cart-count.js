import React from "react";
import styles from "./cart-count.module.css";

const CartCount = ({ count }) => {
  return <div className={styles['cart-count']}>{count}</div>  ;
};

export default CartCount;
