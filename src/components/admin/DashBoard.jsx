import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import { Users, ShoppingCart, DollarSign, Pizza } from "lucide-react";


export function DashBoard() {
  const salesData = [
    { day: "Mon", sales: 4500, orders: 20 },
    { day: "Tue", sales: 5200, orders: 18 },
    { day: "Wed", sales: 4900, orders: 19 },
    { day: "Thu", sales: 6400, orders: 22 },
    { day: "Fri", sales: 7800, orders: 25 },
    { day: "Sat", sales: 9200, orders: 28 },
    { day: "Sun", sales: 8500, orders: 26 },
  ];

  const categoryData = [
    { name: "Pizza", value: 35, color: "#8b5cf6" },
    { name: "Burgers", value: 25, color: "#f43f5e" },
    { name: "Pasta", value: 20, color: "#fb923c" },
    { name: "Salads", value: 12, color: "#22c55e" },
    { name: "Drinks", value: 8, color: "#3b82f6" },
  ];

  const popularItems = [
    { name: "Pep Pizza", orders: 320, price: "$12.99" },
    { name: "Cheese Burger", orders: 270, price: "$9.49" },
    { name: "Chicken Pasta", orders: 210, price: "$11.2" },
    { name: "Veggie Salad", orders: 180, price: "$7.89" },
  ];

  const recentOrders = [
    { id: "#1021", customer: "John Doe", total: "$29.99", status: "Delivered" },
    {
      id: "#1022",
      customer: "Sarah Smith",
      total: "$18.50",
      status: "Pending",
    },
    {
      id: "#1023",
      customer: "David Wilson",
      total: "$42.10",
      status: "Delivered",
    },
    {
      id: "#1024",
      customer: "Emily Clark",
      total: "$15.75",
      status: "Cancelled",
    },
  ];

  return (
    <div className="p-3 sm:p-6 space-y-6 w-full overflow-x-hidden">
      {/* HERO CARD */}
      <div className="w-full p-5 sm:p-8 rounded-2xl bg-linear-to-r from-purple-600 to-orange-500 shadow-md text-white">
        <h1 className="text-xl sm:text-3xl font-bold">
          Welcome to Yumify Dashboard! 🍕
        </h1>
        <p className="text-white/80 mt-1 sm:mt-2 text-sm sm:text-base">
          Here's what's happening today.
        </p>
      </div>

      {/* STATS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            label: "Total Sales",
            value: "$400",
            icon: DollarSign,
            bg: "bg-purple-100",
            text: "text-purple-600",
          },
          {
            label: "Total Orders",
            value: "1,245",
            icon: ShoppingCart,
            bg: "bg-orange-100",
            text: "text-orange-500",
          },
          {
            label: "Active Users",
            value: "842",
            icon: Users,
            bg: "bg-green-100",
            text: "text-green-600",
          },
          {
            label: "Top Product",
            value: "Pep Pizza",
            icon: Pizza,
            bg: "bg-pink-100",
            text: "text-pink-500",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white p-4 sm:p-6 rounded-2xl shadow flex items-center gap-4"
          >
            <div
              className={`p-3 sm:p-4 rounded-full ${item.bg} ${item.text} text-2xl sm:text-3xl`}
            >
              <item.icon />
            </div>
            <div>
              <h3 className="text-gray-500 text-xs sm:text-sm">{item.label}</h3>
              <p className="text-xl sm:text-2xl font-bold">{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CHARTS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LINE CHART */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow lg:col-span-2">
          <h2 className="text-lg font-semibold">Sales Overview</h2>
          <p className="text-gray-500 text-xs sm:text-sm mb-3">
            Weekly performance
          </p>

          <div className="w-full h-52 sm:h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={salesData}>
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="sales"
                  stroke="#8b5cf6"
                  strokeWidth={3}
                />
                <Line
                  type="monotone"
                  dataKey="orders"
                  stroke="#fb923c"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* PIE CHART */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow">
          <h2 className="text-lg font-semibold">Category Sales</h2>
          <p className="text-gray-500 text-xs sm:text-sm mb-2">Distribution</p>

          <div className="w-full h-52 sm:h-64 flex justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  innerRadius={40}
                  outerRadius={75}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {categoryData.map((entry, i) => (
                    <Cell key={i} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>

          <ul className="mt-4 space-y-1 sm:space-y-2">
            {categoryData.map((item, i) => (
              <li
                key={i}
                className="flex justify-between text-gray-700 text-xs sm:text-sm"
              >
                <div className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 sm:w-3 sm:h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  {item.name}
                </div>
                <span className="font-semibold">{item.value}%</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* POPULAR ITEMS + RECENT ORDERS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* POPULAR ITEMS */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow">
          <h2 className="text-lg font-semibold mb-3">Popular Items</h2>

          <ul className="space-y-3 sm:space-y-4">
            {popularItems.map((item, i) => (
              <li
                key={i}
                className="flex justify-between p-3 border rounded-xl text-sm hover:bg-gray-50"
              >
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-gray-500 text-xs">{item.orders} orders</p>
                </div>
                <span className="font-bold">{item.price}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* RECENT ORDERS */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow">
          <h2 className="text-lg font-semibold mb-3">Recent Orders</h2>

          <ul className="space-y-3 sm:space-y-4">
            {recentOrders.map((order, i) => (
              <li
                key={i}
                className="flex justify-between p-3 border rounded-xl text-sm hover:bg-gray-50"
              >
                <div>
                  <p className="font-semibold">{order.id}</p>
                  <p className="text-gray-500 text-xs">{order.customer}</p>
                </div>

                <div className="text-right">
                  <p className="font-semibold">{order.total}</p>
                  <p
                    className={`text-xs ${
                      order.status === "Delivered"
                        ? "text-green-600"
                        : order.status === "Pending"
                        ? "text-yellow-500"
                        : "text-red-500"
                    }`}
                  >
                    {order.status}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
