import React from "react";
import { Link } from "react-router-dom";
// import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer>
      <p>this is the footer</p>
      <Link to="/about">About</Link>
    </footer>
  );
};

export default Footer;
