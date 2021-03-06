import React, { useContext } from "react";
import ProductItem from "../product-item";
import { ProductsContext } from "../../contexts/ProductsContext";
import styles from "./product-grid.module.css";

const ProductsGrid = ({ name, description, type: gridType }) => {
  const { products } = useContext(ProductsContext);
  const { titleSection, boxWrapper, container, boxContent, clear, desktop, tea, drink } = styles;

  return (
    <div className={`${container} ${gridType === "tea" ? tea : drink }`}>
      <div className={boxWrapper}>
          {products
            .filter(({ type: productType }) => productType === gridType)
            .map((product) => (
                <div className={boxContent}><ProductItem key={product.id} product={product} /></div>
          ))}
        <div className={clear}></div>
      </div>
      <div className={desktop}>
        <div className={titleSection}>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductsGrid;
