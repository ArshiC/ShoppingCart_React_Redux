import GetProduct from "../api/getProduct";

//Action Creators
export const addToCart = data => {
  let filteredProductData =
    data.list &&
    data.list.length > 0 &&
    data.list.filter(prod => {
      return prod.productName !== data.product.productName;
    });
  return {
    type: "ADD_TO_CART",
    payload: { productData: filteredProductData, cartItem: data.product }
  };
};

export const removeFromCart = data => {
  let filteredCartData = [];
  filteredCartData =
    data.list &&
    data.list.length > 0 &&
    data.list.filter(cartItem => {
      return cartItem.productName !== data.product.productName;
    });
  return {
    type: "REMOVE_FROM_CART",
    payload: { cartData: filteredCartData, productItem: data.product }
  };
};

//Initial State
let initialState = {
  productList: GetProduct().data,
  cartList: []
};

//Root Reducer
export default function(state = initialState, action) {
  // console.log("state", initialState)
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        productList: action.payload.productData,
        cartList: [...state.cartList, action.payload.cartItem]
      };
    case "REMOVE_FROM_CART":
      console.log(
        "state.productList",
        state.productList,
        action.payload.productItem,
        action.payload.cartData
      );
      return {
        ...state,
        productList: [...state.productList, action.payload.productItem],
        cartList: action.payload.cartData
      };
    default:
      return state;
  }
}
