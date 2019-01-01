import React from "react";
import Product from "../product";
import Cart from "../cart";
import "./style.scss";

export class Dashboard extends React.Component {
	render() {
		return (
			<div className="dashboard_container row">
				<div className="product_list col-8">
					<Product />
				</div>
				<div className="cart_list col-4">
					<Cart />
				</div>
			</div>
		);
	}
}
