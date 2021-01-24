import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Landing from "../pages/landing/landing.js";
import Product from "../pages/product";
import About from "../pages/about";
import NotFound from "../pages/not-found";
import Cart from "../pages/cart";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/about" component={About} />
        <Route path="/product/:productId" component={Product} />
        <Route path="/cart" component={Cart} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
