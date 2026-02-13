import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/slice/AuthSlice";          
import restaurantReducer from "../redux/slice/RestaurantSlice"; 
import menuReducer from "../redux/slice/MenuSlice";
import orderReducer from "../redux/slice/OrderSlice";
import customerReducer from "../redux/slice/CustomerSlice"; 
import dashboardReducer from "../redux/slice/DashBoardSlice";


export const store = configureStore({
  reducer: {
    auth: authReducer,
    restaurant: restaurantReducer, 
    menu: menuReducer, 
    orders: orderReducer,
    customers: customerReducer,
    dashboard: dashboardReducer,
  },
});
