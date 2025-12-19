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
