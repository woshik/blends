import React from "react";
import styles from "./product-image.module.css";

const ProductImage = ({ theme: { primary: color }, id, name }) => (
  <div className={styles.ProductImage} style={{ background: color }}>
    <img alt={name} src={`/img/${id}.png`} className={styles.img} />
  </div>
);

export default ProductImage;
