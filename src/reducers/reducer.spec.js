import Reducer from "./index";

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

	it("should have initial state", () => {
		expect(Reducer({ productList: prods,
			cartList: []}, {})).toEqual(initialState);
	});

	it("should add to cart ", () => {
		expect(
			Reducer(initialState, {
				type: "ADD_TO_CART",
				payload: {list:prods,product:addToCartProduct}
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

	it("should remove from cart", () => {
		expect(
			Reducer({ productList: [],
				cartList: prods}, {
				type: "REMOVE_FROM_CART",
				payload: {list:prods,product:removeFromCartProduct}
			})
		).toEqual({
			productList: [{
				isPublished: "true",
				productName: "Apple iPhone X",
				productImage:
          "https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/iphone-x/iphone-x-silver-grid.png",
				price: "299"
			}],
			cartList: [
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
});
