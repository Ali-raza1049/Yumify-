<<<<<<< HEAD
import React from "react";
import { Routes, Route } from "react-router-dom";
import OwnerLayout from "../components/restaurantOwner/OwnerLayout";

import OwnerHome from "../components/restaurantOwner/OwnerHome";
import Menupage from "../pages/resturantOwner/MenuPage";
import AddItemPage from "../pages/resturantOwner/AddItemPage";
import InventoryPage from "../pages/resturantOwner/InventoryPage";
import AnalyticsPage from "../pages/resturantOwner/AnalyticsPage";
import Orderpage from "../pages/resturantOwner/OrderPage";
import CustomerManagement from "../pages/resturantOwner/CustomerManagement";

const OwnerRoutes = () => {
  return (
    <Routes>
      <Route element={<OwnerLayout />}>

        
        <Route index element={<OwnerHome />} />

        <Route path="orders" element={<Orderpage />} />
        <Route path="menu" element={<Menupage />} />
        <Route path="add-item" element={<AddItemPage />} />
        <Route path="inventory" element={<InventoryPage />} />
        <Route path="analytics" element={<AnalyticsPage />} />
        <Route path="customer" element={<CustomerManagement />} />

      </Route>
    </Routes>
  );
};

export default OwnerRoutes;
=======
import React from 'react'
import { Routes, Route} from "react-router-dom";
import { DashboardPage } from '../pages/owner/DashboardPage';
import {RestaurantPage} from '../pages/owner/RestaurantPage';
import { OrderPage } from '../pages/owner/OrderPage';
import { UserManagementPage } from '../pages/owner/UserManagementPage';


export const OwnerRoutes = () => {
  return (
    
    <Routes>
        <Route path= "/" element ={<DashboardPage/>}/>
        <Route path= "/manage-restaurant" element= {<RestaurantPage/>}/>
         <Route path= "/manage-order" element= {<OrderPage/>}/>
          <Route path= "/manage-user" element= {<UserManagementPage/>}/>


    </Routes> 
  )
}
>>>>>>> 6211ea6cc29eb992cc5d92c96aca9ee33c538407
