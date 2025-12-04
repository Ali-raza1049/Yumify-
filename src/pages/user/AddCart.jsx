 
 import React from "react";
  import { Link } from "react-router-dom";
 
 export default function Addcart() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      
      
      <div className="p-6 bg-white rounded-2xl shadow-lg mb-6">
        <svg
          width="70"
          height="70"
          className="text-blue-500"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M7 4H5L2 11v2h2l3.6 7.6 1.4-.6 1.4.6L14 13h2v-2l-3-7h-2m-1.12 2h3.24l2.18 5h-7.6l2.18-5m.12 11a1.5 1.5 0 110 3 1.5 1.5 0 010-3m6 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"/>
        </svg>
      </div>


      <h2 className="text-3xl font-semibold text-gray-900 mb-2">
        Your Cart is Empty
      </h2>

      
      <p className="text-gray-500 max-w-md text-center mb-6">
        You haven’t added anything yet. Browse our menu and find something you like.
      </p>

      <Link to="/menu">
      <button className="bg-yellow-400 text-orange-700 font-bold px-5 py-2 rounded hover:bg-yellow-300 transition duration-300">
         Go to Menu
     </button>
      </Link>
    </div>
  );
}
