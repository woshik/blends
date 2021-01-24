import React from "react";
import styles from "./cart-modal.module.css";
import Modal from "../modal";
import Button from "../button";
import CartProducts from "../cart-products";
import { FullScreenIcon } from "../icons";

const CartModal = ({ cart, ...modalProps }) => {
  return (
    <div className={styles.cartModalContainer}>
      <Modal {...modalProps} topOffset="44px">
        {cart.length > 0 ? <CartProducts /> : <p>Your cart is empty</p>}
        <hr />
        <div className={styles.cartFooter}>
          <Button href="/cart" icon={<FullScreenIcon width={24} />} outline>
            expand cart view
          </Button>
          <Button href="/checkout">checkout</Button>
        </div>
      </Modal>
    </div>
  );
};

export default CartModal;
