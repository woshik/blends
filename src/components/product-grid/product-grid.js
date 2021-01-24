import React, { useContext } from "react";
import ProductItem from "../product-item";
import { ProductsContext } from "../../contexts/ProductsContext";
import styles from "./product-grid.module.css";

const ProductsGrid = ({ name, description, type: gridType }) => {
  const { products } = useContext(ProductsContext);
  const { productGroupIntro, boxWrapper } = styles;

  return (
    <div>
      <div className={productGroupIntro}>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
      <div className={boxWrapper}>
          {products
            .filter(({ type: productType }) => productType === gridType)
            .map((product) => (
              <ProductItem key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default ProductsGrid;
