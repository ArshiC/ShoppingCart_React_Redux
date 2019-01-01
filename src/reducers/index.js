import GetProduct from "../api/getProduct";
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
		return {...state,
			productList: [...action.payload.list &&
          action.payload.list.length > 0 &&
          action.payload.list.filter(cartItem => {return cartItem.productName !== action.payload.product.productName;
          })],
			cartList: [...state.cartList, action.payload.product]
		};
	case "REMOVE_FROM_CART":
		return {
			...state,
			productList: [...state.productList, action.payload.product],
			cartList: [...action.payload.list &&
          action.payload.list.length > 0 &&
          action.payload.list.filter(cartItem => {return cartItem.productName !== action.payload.product.productName;
          })]
		};
	default:
		return state;
	}
}
