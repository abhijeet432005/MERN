import { configureStore } from "@reduxjs/toolkit";
import products from "./reducers/productSlice";
import user from "./reducers/userSlice";
import cart from "./reducers/cartSlice";
import compare from "./reducers/compareSlice";

const Store = configureStore({
  reducer: {
    userSlice: user,
    productsSlice: products,
    cartSlice: cart,
    compareSlice: compare,
  },
});

export default Store;
