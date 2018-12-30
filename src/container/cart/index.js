import React from "react";
import Button from "../../common/button";
import { removeFromCart } from "../../reducers";
import { connect } from "react-redux";
import "./style.css";
import PropTypes from "prop-types";

export class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { buttonText: "Remove", buttonType: "danger" };
  }
  render() {
    let cartList = <div>No items added to cart</div>;
    if (this.props.cartList && this.props.cartList.length > 0) {
      cartList = this.props.cartList.map(cartItem => {
        return (
          <li key={cartItem.productName} className="cart_item">
            <span className="cart_item_name">{cartItem.productName}</span>
            <Button
              name={this.state.buttonText}
              buttonType={this.state.buttonType}
              action={e => {
                this.props.removeFromCart({
                  product: cartItem,
                  list: this.props.cartList
                });
              }}
            />
          </li>
        );
      });
    }
    return (
      <div>
        <h3>Shopping Cart</h3>
        <ul className="cart_container">{cartList}</ul>
      </div>
    );
  }
}

Cart.propTypes = {
  data: PropTypes.array
};

function mapStateToProps(state) {
  return {
    cartList: state.cartList
  };
}

function matchDispatchToProps(dispatch) {
  return {
    removeFromCart: (item, data) => {
      dispatch(removeFromCart(item, data));
    }
  };
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(Cart);
