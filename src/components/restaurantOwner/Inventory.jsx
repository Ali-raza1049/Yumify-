import React from "react";
import { AlertTriangle, Package, TrendingUp, TrendingDown } from "lucide-react";

export  function Inventory() {
  return (
    <div className="min-h-screen bg-linear-to-b from-pink-50 to-white p-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Inventory Management</h1>
        <p className="text-gray-500">Track and manage your stock levels</p>
      </div>

      {/* Stock Alert */}
      <div className="bg-red-50 border border-red-200 rounded-xl p-4 mt-4 flex items-start gap-3">
        <AlertTriangle className="text-red-500 mt-1" />
        <div>
          <h2 className="text-red-600 font-semibold">Stock Alert</h2>
          <p className="text-sm text-red-500">1 item(s) critically low, 2 item(s) running low</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-start gap-4">
          <Package className="text-purple-500" />
          <p className="text-gray-600 text-sm">Total Items</p>
          <p className="text-2xl font-semibold">6</p>
        </div>

        <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-start gap-4">
          <TrendingUp className="text-green-500" />
          <p className="text-gray-600 text-sm">Good Stock</p>
          <p className="text-2xl font-semibold">3</p>
        </div>

        <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-start gap-4">
          <TrendingDown className="text-yellow-500" />
          <p className="text-gray-600 text-sm">Low Stock</p>
          <p className="text-2xl font-semibold">2</p>
        </div>

        <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-start gap-4">
          <AlertTriangle className="text-red-500" />
          <p className="text-gray-600 text-sm">Critical</p>
          <p className="text-2xl font-semibold">1</p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white rounded-2xl shadow p-4 mt-6">
        <input
          type="text"
          placeholder="Search inventory items..."
          className="w-full p-3 text-gray-700 placeholder-gray-400 focus:outline-none"
        />
      </div>

      {/* Inventory Table */}
      <div className="bg-white rounded-2xl shadow p-6 mt-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Inventory List</h3>

        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-gray-600 border-b bg-gray-50">
              <th className="p-3">Item Name</th>
              <th className="p-3">Category</th>
              <th className="p-3">Current Stock</th>
              <th className="p-3">Min. Stock</th>
              <th className="p-3">Supplier</th>
              <th className="p-3">Last Restocked</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Row 1 */}
            <tr className="border-b hover:bg-gray-50">
              <td className="p-4">Pizza Dough</td>
              <td className="p-4"><span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">Ingredients</span></td>
              <td className="p-4">
                <p>45 kg</p>
                <div className="w-32 h-2 bg-gray-200 rounded-full mt-1"><div className="h-full bg-green-500 rounded-full w-full"></div></div>
              </td>
              <td className="p-4">20 kg</td>
              <td className="p-4">Fresh Bakery Co.</td>
              <td className="p-4">2024-11-20</td>
              <td className="p-4"><span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full">Good</span></td>
              <td className="p-4"><button className="px-4 py-1 bg-pink-600 text-white rounded-full">stock</button></td>
            </tr>

            {/* Row 2 */}
            <tr className="border-b hover:bg-gray-50">
              <td className="p-4">Mozzarella Cheese</td>
              <td className="p-4"><span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">Ingredients</span></td>
              <td className="p-4">
                <p>12 kg</p>
                <div className="w-32 h-2 bg-gray-200 rounded-full mt-1"><div className="h-full bg-yellow-500 rounded-full w-1/2"></div></div>
              </td>
              <td className="p-4">15 kg</td>
              <td className="p-4">Dairy Delights</td>
              <td className="p-4">2024-11-18</td>
              <td className="p-4"><span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full">Low St</span></td>
              <td className="p-4"><button className="px-4 py-1 bg-pink-600 text-white rounded-full">Restock</button></td>
            </tr>

            {/* Row 3 */}
            <tr className="border-b hover:bg-gray-50">
              <td className="p-4">Tomato Sauce</td>
              <td className="p-4"><span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">Ingredients</span></td>
              <td className="p-4">
                <p>8 liters</p>
                <div className="w-32 h-2 bg-gray-200 rounded-full mt-1"><div className="h-full bg-yellow-500 rounded-full w-1/3"></div></div>
              </td>
              <td className="p-4">10 liters</td>
              <td className="p-4">Italian Imports</td>
              <td className="p-4">2024-11-15</td>
              <td className="p-4"><span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full">Low St</span></td>
              <td className="p-4"><button className="px-4 py-1 bg-pink-600 text-white rounded-full">Restock</button></td>
            </tr>

            {/* Row 4 */}
            <tr className="border-b hover:bg-gray-50">
              <td className="p-4">Ground Beef</td>
              <td className="p-4"><span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">Ingredients</span></td>
              <td className="p-4">
                <p className="text-red-600 font-semibold">2 kg</p>
                <div className="w-32 h-2 bg-gray-200 rounded-full mt-1"><div className="h-full bg-red-500 rounded-full w-1/6"></div></div>
              </td>
              <td className="p-4">10 kg</td>
              <td className="p-4">Quality Meats</td>
              <td className="p-4">2024-11-10</td>
              <td className="p-4"><span className="px-3 py-1 bg-red-100 text-red-700 text-xs rounded-full">Critical</span></td>
              <td className="p-4"><button className="px-4 py-1 bg-pink-600 text-white rounded-full">Restock</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
 export default Inventory;