import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./features/user/userSlice";
import productReducer from "./features/products/productsSlice";
import orderReducer from "./features/orders/orderSlice";
import categoryReducer from "./features/category/categorySlice";
import subcategoryReducer from "./features/subcategory/subcategorySlice";
import couponReducer from "./features/coupon/couponSlice";
import constantsReducer from "./features/constants/constantsSlice";
import addressReducer from "./features/address/addressSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    products: productReducer,
    order: orderReducer,
    category: categoryReducer,
    subcategory: subcategoryReducer,
    coupon: couponReducer,
    constants: constantsReducer,
    address: addressReducer,
  },
});
