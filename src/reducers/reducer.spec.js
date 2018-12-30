import Reducer from "./index";
import { addToCart, removeFromCart } from "./index";

let initialState,
  prods,
  addToCartProduct,
  removeFromCartProduct,
  filteredProducts;
describe("reducer", () => {
  beforeEach(() => {
    prods = [
      {
        isPublished: "true",
        productName: "Apple iPhone X",
        productImage:
          "https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/iphone-x/iphone-x-silver-grid.png",
        price: "299"
      },
      {
        isPublished: "true",
        productName: "Apple iPhone 8",
        productImage:
          "https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/iphone-8/iphone-8-silver-grid.png",
        price: "100"
      }
    ];
    initialState = {
      productList: prods,
      cartList: []
    };

    addToCartProduct = prods[0];
    filteredProducts = prods.slice(1);
    removeFromCartProduct = prods[0];
  });

  // it("should have initial state", () => {
  //   expect(Reducer(undefined, {})).toEqual(initialState);
  // });

  it("should add to cart ", () => {
    console.log("prods", prods);
    console.log(
      "addToCartProducy",
      addToCartProduct,
      "filteredProducts",
      filteredProducts
    );
    expect(
      Reducer(initialState, {
        type: "ADD_TO_CART",
        payload: { productData: filteredProducts, cartItem: addToCartProduct }
      })
    ).toEqual({
      cartList: [
        {
          isPublished: "true",
          productName: "Apple iPhone X",
          productImage:
            "https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/iphone-x/iphone-x-silver-grid.png",
          price: "299"
        }
      ],
      productList: [
        {
          isPublished: "true",
          productName: "Apple iPhone 8",
          productImage:
            "https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/iphone-8/iphone-8-silver-grid.png",
          price: "100"
        }
      ]
    });
  });

  // it("should remove from cart", () => {
  //   expect(
  //     Reducer(initialState, {
  //       type: "REMOVE_FROM_CART",
  //       payload: { cartData: filteredProducts, productItem: removeFromCartProduct }
  //     })
  //   ).toEqual({
  //     productList: [{
  //       isPublished: "true",
  //       productName: "Apple iPhone X",
  //       productImage:
  //         "https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/iphone-x/iphone-x-silver-grid.png",
  //       price: "299"
  //     }],
  //     cartList: [
  //       {
  //         isPublished: "true",
  //         productName: "Apple iPhone 8",
  //         productImage:
  //           "https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/iphone-8/iphone-8-silver-grid.png",
  //         price: "100"
  //       }
  //     ]
  //   });
  // });
});
