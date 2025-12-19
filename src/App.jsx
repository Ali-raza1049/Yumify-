import React from "react";
import AdminRoutes from './routes/AdminRoutes'
import UserRoutes from './routes/UserRoutes'
import RestaurantRoutes from "./routes/RestaurantRoutes";
import { OwnerRoutes } from "./routes/OwnerRoutes";


function App() {
  return (
    <>   
     {/* <AdminRoutes/>*/}
       <UserRoutes/> 
      <RestaurantRoutes/> 
     {/* <OwnerRoutes/> */}
    </>
  );
  
}
export default App;
