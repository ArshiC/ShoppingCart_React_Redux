import React from "react";
import Button from "../../common/button";
import Image from "../../common/image";
import { addToCart } from "../../reducers";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./style.css";

export class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productData: this.props.productList,
      currencyFormat: "$",
      buttonText: "Add To Cart",
      buttonType: "primary"
    };
  }
  componentWillReceiveProps(nxtProps) {
    if (nxtProps.productList !== this.props.productList) {
      this.setState({ productData: nxtProps.productList });
    }
  }
  render() {
    let filteredProductList = this.state.productData && this.state.productData.length > 0 && this.state.productData.filter((product)=> product.isPublished === "true" )
    let productList = <div>No Items in Product List</div>;
    if(filteredProductList && filteredProductList.length > 0){
      productList = filteredProductList.map((productItem)=>{
      return(<li key={productItem.productName} className="product_item">
      <div className="product_name">{productItem.productName}</div>
      <Image
        classes="product_img"
        src={productItem.productImage}
        alt={productItem.productName}
      />
      <div className="product_amount">
        {this.state.currencyFormat}
        {productItem.price}
      </div>
      <Button
        name={this.state.buttonText}
        buttonType={this.state.buttonType}
        action={e => {
          this.props.addToCart({
            product: productItem,
            list: this.state.productData
          });
        }}
      />
    </li>)});
    }
    return (
      <div>
        <h3>Product List</h3>
        <ul className="product_container">{productList}</ul>
      </div>
    );
  }
}

Product.propTypes = {
  data: PropTypes.array};

function mapStateToProps(state) {
  return {
    productList: state.productList
  };
}

function matchDispatchToProps(dispatch) {
  return {
    addToCart: (item, data) => {
      dispatch(addToCart(item, data));
    }
  };
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(Product);
