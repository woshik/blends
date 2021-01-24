import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { CartIcon } from "../icons";
import CartModal from "../cart-modal";
import CartCount from "../cart-count";
import styles from "./header.module.css";

const Header = ({ showHomeButton }) => {
  const { itemCount, cartItems } = useContext(CartContext);
  const [show, toggle] = useState(false);
  const { cart, cartCountPosition } = styles;

  return (
    <>
      <header>
        {showHomeButton && <Link to="/">Home</Link>}
        <button className={cart} onClick={() => toggle(!show)}>
          <CartIcon width={25} />
          <div className={cartCountPosition}>
            <CartCount count={itemCount} />
          </div>
        </button>
      </header>
      <CartModal onClose={() => toggle(!show)} show={show} cart={cartItems} />
    </>
  );
};

export default Header;
