import React from "react";
import Product from "../product";
import Cart from "../cart";
import "./style.css";

export class Dashboard extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="product_list col-md-8">
          <Product />
        </div>
        <div className="cart_list col-md-4">
          <Cart />
        </div>
      </div>
    );
  }
}
