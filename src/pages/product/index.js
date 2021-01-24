import React, { useContext } from "react";
import Layout from "../../components/layout";
import { useParams } from "react-router-dom";
import { formatNumber } from '../../helpers/utils';
import { CartContext } from "../../contexts/CartContext";
import { ProductsContext } from "../../contexts/ProductsContext";
import NotFound from "../not-found";

const Product = () => {
  const { addProduct, cartItems, increase, decrease } = useContext(CartContext);
  const { products } = useContext(ProductsContext)
  const { productId } = useParams();
  const product = products.find(product => product.id === productId);

  const isInCart = (product) => {
    return !!cartItems.find((item) => item.id === productId);
  };

  return product ? (
    <Layout title="Product" description="This is the Product page">
      <h1>Product: {product.name}</h1>
      <p>price: {formatNumber(product.price)}</p>
      {isInCart(product) && (
        <>
          <button onClick={() => increase(product)}>Add more</button>
          <button onClick={() => decrease(product)}>remove one</button>
        </>
      )}

      {!isInCart(product) && (
        <button onClick={() => addProduct(product)}>Add to cart</button>
      )}
    </Layout>
  ) : (<NotFound type="product" />);
};

export default Product;
