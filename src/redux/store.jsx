import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/slice/AuthSlice";          
import restaurantReducer from "../redux/slice/RestaurantSlice"; 
import menuReducer from "../redux/slice/MenuSlice"; 
import cartReducer from "../redux/slice/CartSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    restaurant: restaurantReducer, 
    menu: menuReducer, 
    cart: cartReducer,
  },
});
