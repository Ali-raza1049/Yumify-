import React from "react";
import AdminRoutes from './routes/AdminRoutes'
import UserRoutes from './routes/UserRoutes'
import RestaurantRoutes from "./routes/RestaurantRoutes";

function App() {
  return (
    <>   
     {/* <AdminRoutes/>*/}
   <UserRoutes/> 
    <RestaurantRoutes/>  
    </>
  );
}
export default App;
