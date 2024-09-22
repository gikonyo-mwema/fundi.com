import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./Auth-slice/auth.jsx";
import adminProductsSlice from "./Admin/ProductSlice/product.js";
import adminOrderSlice from "./Admin/OrderSlice/order.js";

import shopProductsSlice from "./shop/products-slice/product.js";
import shopCartSlice from "./shop/cart-slice/cart.js";
import shopAddressSlice from "./shop/address-slice/address.js";
import shopOrderSlice from "./shop/order-slice/order.js";
import shopSearchSlice from "./shop/search-slice/search.js";
import shopReviewSlice from "./shop/review-slice/review.js";
import commonFeatureSlice from "./Common-slice/common.js";

const store = configureStore({
  reducer: {
    auth: authReducer,

    adminProducts: adminProductsSlice,
    adminOrder: adminOrderSlice,

    shopProducts: shopProductsSlice,
    shopCart: shopCartSlice,
    shopAddress: shopAddressSlice,
    shopOrder: shopOrderSlice,
    shopSearch: shopSearchSlice,
    shopReview: shopReviewSlice,

    commonFeature: commonFeatureSlice,
  },
});

export default store;

